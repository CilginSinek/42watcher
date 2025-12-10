import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

function CookiePolicy() {
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
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">Çerez Politikası</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <section>
              <h2 className="text-xl font-semibold mb-3">Çerez Nedir?</h2>
              <p className="text-(--text-secondary)">
                Çerezler (cookies), web sitelerinin kullanıcı deneyimini geliştirmek amacıyla cihazınızda saklanan küçük metin dosyalarıdır. 
                42 Watcher platformu, oturum yönetimi ve kullanıcı deneyimini iyileştirmek için localStorage teknolojisini kullanır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kullandığımız Çerezler</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-input)' }}>
                      <th className="border border-(--border) p-3 text-left">Çerez Adı</th>
                      <th className="border border-(--border) p-3 text-left">Türü</th>
                      <th className="border border-(--border) p-3 text-left">Amacı</th>
                      <th className="border border-(--border) p-3 text-left">Süre</th>
                    </tr>
                  </thead>
                  <tbody className="text-(--text-secondary)">
                    <tr>
                      <td className="border border-(--border) p-3">42_access_token</td>
                      <td className="border border-(--border) p-3">Zorunlu</td>
                      <td className="border border-(--border) p-3">Oturum token'ı - Kimlik doğrulama</td>
                      <td className="border border-(--border) p-3">30 gün</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">theme</td>
                      <td className="border border-(--border) p-3">İşlevsel</td>
                      <td className="border border-(--border) p-3">Tema tercihi (dark/light mode)</td>
                      <td className="border border-(--border) p-3">Kalıcı</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">dashboard_cache_*</td>
                      <td className="border border-(--border) p-3">Performans</td>
                      <td className="border border-(--border) p-3">Dashboard verilerinin önbelleklenmesi</td>
                      <td className="border border-(--border) p-3">5 dakika</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">students_cache_*</td>
                      <td className="border border-(--border) p-3">Performans</td>
                      <td className="border border-(--border) p-3">Öğrenci listesi önbelleği</td>
                      <td className="border border-(--border) p-3">5 dakika</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Çerez Türleri</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">🔴 Zorunlu Çerezler</h3>
                  <p className="text-(--text-secondary) text-sm">
                    Platformun çalışması için mutlaka gerekli olan çerezlerdir. Oturum token'ı olmadan platforma giriş yapamazsınız.
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">🟡 İşlevsel Çerezler</h3>
                  <p className="text-(--text-secondary) text-sm">
                    Tercihlerinizi hatırlamak için kullanılır (tema seçimi gibi). Bu çerezleri reddedebilirsiniz, ancak bazı özellikler çalışmayabilir.
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">🟢 Performans Çerezleri</h3>
                  <p className="text-(--text-secondary) text-sm">
                    Sayfa yükleme hızını artırmak için verileri geçici olarak önbelleğe alır. API limitlerini korumak için kullanılır.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Üçüncü Taraf Çerezler</h2>
              <p className="text-(--text-secondary)">
                42 Watcher platformu <strong>üçüncü taraf çerez kullanmaz</strong>. Reklam ağları, analitik araçlar (Google Analytics, vb.) 
                veya sosyal medya entegrasyonları bulunmamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Çerezleri Nasıl Kontrol Edersiniz?</h2>
              <p className="text-(--text-secondary) mb-3">
                Çerezleri tarayıcınızın ayarlarından kontrol edebilirsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri</li>
                <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
                <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezleri ve web sitesi verilerini yönet</li>
                <li><strong>Edge:</strong> Ayarlar → Gizlilik, arama ve hizmetler → Çerezler ve site verileri</li>
              </ul>
              
              <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  ⚠️ <strong>Uyarı:</strong> Zorunlu çerezleri (42_access_token) silerseniz oturumunuz sonlanır ve platformdan çıkış yaparsınız.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">localStorage Kullanımı</h2>
              <p className="text-(--text-secondary)">
                Platform, çerezler yerine <strong>localStorage</strong> teknolojisini kullanır. localStorage, tarayıcınızda yerel olarak veri saklar 
                ve sunucuya otomatik olarak gönderilmez. Bu yöntem daha güvenlidir ve GDPR/KVKK uyumluluğu açısından avantaj sağlar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Veri Güvenliği</h2>
              <p className="text-(--text-secondary)">
                localStorage'da saklanan session token'ı, backend tarafında AES-256-CBC şifreleme ile korunmuş access token'a karşılık gelir. 
                Token'lar 30 gün sonra otomatik olarak silinir ve her istekte geçerlilik kontrolü yapılır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Değişiklikler</h2>
              <p className="text-(--text-secondary)">
                Bu çerez politikası gerektiğinde güncellenebilir. Önemli değişiklikler platform üzerinden duyurulacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">İletişim</h2>
              <p className="text-(--text-secondary)">
                Çerez politikamız hakkında sorularınız için:{' '}
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

export default CookiePolicy;
