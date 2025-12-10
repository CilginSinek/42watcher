import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

function KVKK() {
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
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">Aydınlatma Metni (KVKK 10. Madde)</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <section>
              <h2 className="text-xl font-semibold mb-3">Veri Sorumlusu</h2>
              <p className="text-(--text-secondary)">
                <strong>İsmail Han Duman</strong><br />
                42 İstanbul Öğrencisi<br />
                E-posta: iduman@student.42istanbul.com.tr<br />
                Website: <a href="https://sinek.dev" target="_blank" rel="noopener noreferrer" className="text-(--primary) hover:opacity-80">sinek.dev</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
              <p className="text-(--text-secondary) mb-2">
                Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>42 OAuth API:</strong> 42 Intra platformu üzerinden OAuth 2.0 protokolü ile (açık rızanızla)</li>
                <li><strong>Platform Kullanımı:</strong> Platformu kullanırken otomatik olarak (IP adresi, cihaz bilgisi, sorgu kayıtları)</li>
                <li><strong>Çerezler:</strong> Oturum yönetimi için localStorage kullanımı</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                <strong>Hukuki Dayanak:</strong> KVKK madde 5/2-a (Açık rızanız) ve madde 5/2-f (Veri sorumlusunun meşru menfaatleri)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Toplanan Kişisel Veriler</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-input)' }}>
                      <th className="border border-(--border) p-3 text-left">Veri Kategorisi</th>
                      <th className="border border-(--border) p-3 text-left">Veri Türleri</th>
                    </tr>
                  </thead>
                  <tbody className="text-(--text-secondary)">
                    <tr>
                      <td className="border border-(--border) p-3">Kimlik Bilgileri</td>
                      <td className="border border-(--border) p-3">Login (kullanıcı adı), Displayname, 42 ID</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">İletişim Bilgileri</td>
                      <td className="border border-(--border) p-3">42 e-posta adresi</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">Görsel/İşitsel Veriler</td>
                      <td className="border border-(--border) p-3">Profil fotoğrafı</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">Eğitim Bilgileri</td>
                      <td className="border border-(--border) p-3">Kampüs, seviye, projeler, skorlar, değerlendirmeler</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">İşlem Güvenliği Bilgileri</td>
                      <td className="border border-(--border) p-3">IP adresi, cihaz bilgisi, oturum token'ı, şifrelenmiş access token</td>
                    </tr>
                    <tr>
                      <td className="border border-(--border) p-3">İşlem Kayıtları</td>
                      <td className="border border-(--border) p-3">Sorgu kayıtları, son aktivite zamanı, kullanılan IP'ler</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kişisel Verilerin İşlenme Amaçları</h2>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Kullanıcı kimlik doğrulama ve yetkilendirme işlemleri</li>
                <li>42 Network öğrenci istatistiklerinin görselleştirilmesi ve analizi</li>
                <li>Platform güvenliğinin sağlanması</li>
                <li>Oturum yönetimi ve kullanıcı deneyiminin iyileştirilmesi</li>
                <li>Kötüye kullanım ve yetkisiz erişimin tespiti ve önlenmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Kişisel Verilerin Aktarımı</h2>
              <p className="text-(--text-secondary) mb-2">
                Kişisel verileriniz yalnızca aşağıdaki durumlarda aktarılır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>42 Intra API:</strong> Kimlik doğrulama için (OAuth)</li>
                <li><strong>MongoDB Atlas:</strong> Veri saklama için (bulut hizmet sağlayıcısı)</li>
                <li><strong>Vercel:</strong> Hosting ve CDN hizmeti için</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                <strong>Önemli:</strong> Verileriniz üçüncü şahıslarla ticari amaçla paylaşılmaz veya satılmaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Veri Saklama Süresi</h2>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>Oturum Verileri:</strong> 30 gün (otomatik silme)</li>
                <li><strong>Akademik Veriler:</strong> Hesabınızı silene kadar veya talep üzerine</li>
                <li><strong>Güvenlik Kayıtları:</strong> 6 ay (IP, cihaz, sorgu kayıtları)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">KVKK Kapsamındaki Haklarınız</h2>
              <p className="text-(--text-secondary) mb-2">
                6698 sayılı KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK madde 7'de öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Düzeltme, silme ve yok edilme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Başvuru Hakkı</h2>
              <p className="text-(--text-secondary)">
                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
              </p>
              <div className="mt-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                <p className="text-(--text-secondary)">
                  <strong>E-posta:</strong> iduman@student.42istanbul.com.tr<br />
                  <strong>Konu:</strong> "KVKK Başvurusu"<br />
                  <strong>Yanıt Süresi:</strong> En geç 30 gün içinde
                </p>
              </div>
            </section>

            <section>
              <p className="text-xs text-(--text-tertiary) mt-8">
                Bu aydınlatma metni 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca hazırlanmıştır.<br />
                Son güncelleme: 10 Aralık 2025
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default KVKK;
