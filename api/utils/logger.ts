import type { VercelRequest } from '@vercel/node';
import mongoose from 'mongoose';

// ============ EVENTLOG SCHEMA ============
const eventlogSchema = new mongoose.Schema({
    login: { type: String, required: true, index: true },
    campusId: { type: Number, required: true, index: true },
    eventType: { type: String, required: true }, // e.g., "api_request", "dashboard_view", etc.
    eventData: { type: mongoose.Schema.Types.Mixed }, // Additional event data (object)
    // Request details
    ip: { type: String },
    userAgent: { type: String },
    method: { type: String }, // GET, POST, etc.
    path: { type: String }, // Request path
    timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

// Indexes for common queries
eventlogSchema.index({ login: 1, eventType: 1, timestamp: -1 }); // User events by time
eventlogSchema.index({ campusId: 1, eventType: 1, timestamp: -1 }); // Campus events by time

// ============ LOGGING FUNCTIONS ============
let cachedDB2Connection: mongoose.Connection | null = null;

function getEventLogModel(db2: mongoose.Connection) {
    return db2.models.EventLog || db2.model('EventLog', eventlogSchema);
}

/**
 * Log API requests to EventLog (DB2)
 * @param req - Vercel request object
 * @param db2 - MongoDB connection to DB2
 * @param login - User login
 * @param campusId - Campus ID
 * @param eventType - Type of event (e.g., 'api_request', 'dashboard_view', 'student_list', etc.)
 * @param eventData - Additional event data (query params, route, etc.)
 */
export async function logEvent(
    req: VercelRequest,
    db2: mongoose.Connection,
    login: string,
    campusId: number,
    eventType: string,
    eventData: Record<string, unknown> = {}
): Promise<void> {
    try {
        // Get client IP
        const forwardedFor = req.headers['x-forwarded-for'];
        const realIp = req.headers['x-real-ip'];
        const clientIp = (typeof forwardedFor === 'string' ? forwardedFor.split(',')[0]?.trim() : null)
            || (typeof realIp === 'string' ? realIp : null)
            || 'unknown';

        // Get user agent
        const userAgent = (req.headers['user-agent'] as string) || 'unknown';

        const EventLog = getEventLogModel(db2);
        await EventLog.create({
            login,
            campusId,
            eventType,
            eventData,
            ip: clientIp,
            userAgent,
            method: req.method,
            path: req.url || 'unknown',
            timestamp: new Date()
        });
    } catch (error) {
        // Silent fail - don't break the main request if logging fails
        console.error('EventLog error:', error instanceof Error ? error.message : 'Unknown error');
    }
}

/**
 * Simplified logEvent for non-request contexts
 */
export async function logEventSimple(
    db2: mongoose.Connection,
    login: string,
    campusId: number,
    eventType: string,
    eventData: Record<string, unknown> = {}
): Promise<void> {
    try {
        const EventLog = getEventLogModel(db2);
        await EventLog.create({
            login,
            campusId,
            eventType,
            eventData,
            timestamp: new Date()
        });
    } catch (error) {
        console.error('EventLog error:', error instanceof Error ? error.message : 'Unknown error');
    }
}
