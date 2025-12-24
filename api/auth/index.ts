import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';
import crypto from 'crypto';

// ============ MONGODB CONNECTION ============
const MONGODB_URL2 = process.env.MONGODB_URL2 || '';

interface CachedDB2 { conn: mongoose.Connection | null; }
const cachedDB2: CachedDB2 = { conn: null };

async function connectDB2(): Promise<mongoose.Connection> {
    if (cachedDB2.conn && cachedDB2.conn.readyState === 1) return cachedDB2.conn;
    cachedDB2.conn = mongoose.createConnection(MONGODB_URL2);
    await new Promise<void>((resolve, reject) => {
        cachedDB2.conn!.once('connected', resolve);
        cachedDB2.conn!.once('error', reject);
    });
    return cachedDB2.conn;
}

// ============ SESSION MODEL ============
const sessionSchema = new mongoose.Schema({
    sessionToken: { type: String, required: true, unique: true, index: true },
    login: { type: String, required: true, index: true },
    campusId: { type: Number, required: true },
    userData: { type: mongoose.Schema.Types.Mixed },
    usedIps: [{ type: String }],
    lastActivity: { type: Date, default: Date.now, index: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true, index: true }
}, { timestamps: true });

function getSessionModel() {
    const db2 = cachedDB2.conn!;
    return db2.models.Session || db2.model('Session', sessionSchema);
}

// ============ CRYPTO ============
const SECRET_KEY = process.env.SESSION_SECRET || 'default-secret-key-min-32-chars!!';
function getKey(): Buffer { return crypto.createHash('sha256').update(SECRET_KEY).digest(); }
function encryptToken(token: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', getKey(), iv);
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}
function generateSessionToken(): string { return crypto.randomBytes(32).toString('hex'); }

// ============ HANDLER ============
export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    if (req.method === 'OPTIONS') { res.status(200).end(); return; }
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        await connectDB2();
        const Session = getSessionModel();
        const action = req.query.action as string || req.body?.action;

        if (action === 'logout') {
            const authHeader = req.headers.authorization;
            if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'No session token provided' });
            const sessionToken = authHeader.replace('Bearer ', '');
            const session = await Session.findOneAndDelete({ sessionToken });
            if (!session) return res.status(404).json({ error: 'Session not found' });
            return res.status(200).json({ message: 'Logged out successfully' });
        }

        const { code } = req.body;
        if (!code) return res.status(400).json({ error: 'Authorization code is required' });

        const response = await fetch('https://api.intra.42.fr/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'authorization_code',
                client_id: process.env.FORTYTWO_CLIENT_ID,
                client_secret: process.env.FORTYTWO_CLIENT_SECRET,
                code, redirect_uri: process.env.FORTYTWO_REDIRECT_URI,
            }),
        });

        const tokenData = await response.json() as Record<string, unknown>;
        if (!response.ok) return res.status(response.status).json({ error: 'Failed to exchange code', details: tokenData });

        const userResponse = await fetch('https://api.intra.42.fr/v2/me', { headers: { Authorization: `Bearer ${tokenData.access_token}` } });
        const userData = await userResponse.json() as Record<string, unknown>;
        if (!userResponse.ok) return res.status(userResponse.status).json({ error: 'Failed to fetch user data', details: userData });

        const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || (req.headers['x-real-ip'] as string) || 'unknown';
        const sessionToken = generateSessionToken();
        const encryptedAccessToken = encryptToken(tokenData.access_token as string);

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30);

        const campusUsers = userData.campus_users as Array<{ campus_id?: number }> | undefined;
        const session = await Session.create({
            sessionToken, login: userData.login, campusId: campusUsers?.[0]?.campus_id || 0,
            userData: {
                ...userData, encryptedAccessToken, tokenType: tokenData.token_type, expiresIn: tokenData.expires_in,
                refreshToken: tokenData.refresh_token ? encryptToken(tokenData.refresh_token as string) : undefined
            },
            usedIps: [clientIp], lastActivity: new Date(), expiresAt,
        });

        return res.status(200).json({
            sessionToken: session.sessionToken,
            user: { id: userData.id, login: userData.login, displayname: userData.displayname, email: userData.email, image: userData.image, campus: campusUsers?.[0] },
            expiresAt: session.expiresAt,
        });
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(500).json({ error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' });
    }
}
