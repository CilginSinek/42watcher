import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen transition-colors duration-300">
      <header style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }} className="border-b backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/dashboard" className="text-lg font-bold text-(--text-primary) hover:text-(--primary) transition">
              42 Watcher
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="card">
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">Gizlilik Politikası</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Veri Sorumlusu</h2>
              <p className="text-(--text-secondary)">
                42 Watcher platformu, 42 Network öğrencilerinin akademik verilerini görselleştiren bir hizmettir. 
                Platform, veri sorumlusu sıfatıyla İsmail Han Duman tarafından işletilmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Toplanan Veriler</h2>
              <p className="text-(--text-secondary) mb-2">Platformumuz aşağıdaki verileri toplar ve işler:</p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>42 OAuth Verileri:</strong> 42 Intra hesabınızdan alınan kullanıcı bilgileri (login, displayname, email, profil fotoğrafı, kampüs bilgisi)</li>
                <li><strong>Akademik Veriler:</strong> Proje skorları, değerlendirmeler, correction points, wallet, seviye bilgileri</li>
                <li><strong>Oturum Verileri:</strong> Şifrelenmiş access token'lar, oturum token'ları, son aktivite zamanı</li>
                <li><strong>Teknik Veriler:</strong> IP adresleri, kullanılan cihaz bilgileri, sorgu kayıtları</li>
                <li><strong>Çerez Verileri:</strong> Oturum yönetimi için kullanılan sessionToken (localStorage)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Verilerin İşlenme Amaçları</h2>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Kullanıcı kimlik doğrulaması ve oturum yönetimi</li>
                <li>42 Network öğrenci istatistiklerinin görselleştirilmesi</li>
                <li>Platform güvenliğinin sağlanması ve kötüye kullanımın önlenmesi</li>
                <li>Hizmet kalitesinin iyileştirilmesi ve analiz</li>
                <li>KVKK ve ilgili mevzuata uyum sağlanması</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Verilerin Saklanması ve Güvenliği</h2>
              <p className="text-(--text-secondary) mb-2">
                Verileriniz MongoDB Atlas bulut veritabanında güvenli bir şekilde saklanmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Access token'lar AES-256-CBC şifreleme ile korunur</li>
                <li>Oturumlar 30 gün sonra otomatik olarak silinir</li>
                <li>IP adresleri ve cihaz bilgileri güvenlik amaçlı kaydedilir</li>
                <li>Verileriniz üçüncü taraflarla paylaşılmaz</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Kullanıcı Hakları (KVKK md. 11)</h2>
              <p className="text-(--text-secondary) mb-2">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                <li>Verilerin silinmesini veya yok edilmesini isteme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. İletişim</h2>
              <p className="text-(--text-secondary)">
                Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için:{' '}
                <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">
                  iduman@student.42istanbul.com.tr
                </a>
              </p>
            </section>

            <section>
              <p className="text-xs text-(--text-tertiary) mt-8">
                Son güncelleme: 10 Aralık 2025
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
