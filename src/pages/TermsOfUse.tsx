import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

function TermsOfUse() {
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
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">Kullanım Koşulları</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Hizmet Tanımı</h2>
              <p className="text-(--text-secondary)">
                42 Watcher, 42 Network eğitim platformuna kayıtlı öğrencilerin aktivite verilerini görselleştiren bir istatistik platformudur. 
                Bu hizmet, 42 Intra API'sini kullanarak öğrenci verilerini (logtime, evaluation, achievement vb.) toplar ve kullanıcı dostu 
                bir arayüz üzerinden sunar.
              </p>
              <div className="mt-3 p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-blue-800">
                  ℹ️ <strong>Not:</strong> 42 Watcher, 42 Network veya École 42 ile resmi bir bağlantısı olmayan bağımsız bir projedir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Kullanıcı Yükümlülükleri</h2>
              <p className="text-(--text-secondary) mb-3">
                Platformu kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Geçerli bir <strong>42 Network hesabınız</strong> olmalıdır.</li>
                <li>42 OAuth ile giriş yaparken paylaşılan verilerin <strong>42 Intra'dan alınmasına</strong> izin verirsiniz.</li>
                <li>Platform üzerinde <strong>hukuka aykırı faaliyetlerde bulunmazsınız</strong> (SQL injection, DDoS, vb.).</li>
                <li>Diğer kullanıcıların kişisel verilerini <strong>izinsiz toplamaz veya paylaşmazsınız</strong>.</li>
                <li>Platform kaynak kodlarını <strong>tersine mühendislik yapmadan</strong> kullanırsınız.</li>
                <li>42 Intra API limitlerini aşacak şekilde <strong>aşırı istek göndermezsiniz</strong>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Hizmet Kapsamı ve Sınırlamalar</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-(--text-primary) mb-2">✅ Hizmetin Sunduğu Özellikler</h3>
                  <ul className="list-disc list-inside space-y-1 text-(--text-secondary) ml-4">
                    <li>Haftalık ortalama log süreleri</li>
                    <li>Değerlendirme geçmişi (evaluations)</li>
                    <li>Kampüs istatistikleri</li>
                    <li>Proje bazlı filtreleme</li>
                    <li>Tema özelleştirme (Dark/Light mode)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❌ Hizmetin Sunmadığı Özellikler</h3>
                  <ul className="list-disc list-inside space-y-1 text-(--text-secondary) ml-4">
                    <li>Gerçek zamanlı izleme (real-time tracking)</li>
                    <li>Özel mesajlaşma (chat/messaging)</li>
                    <li>Peer evaluation skorlarını değiştirme</li>
                    <li>42 Intra hesap yönetimi</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Veri Doğruluğu ve Sorumluluk</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform, verileri <strong>42 Intra API</strong>'sinden alır. Veriler şu nedenlerle hatalı veya güncel olmayabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>42 Intra API'sinden kaynaklı gecikmeler (API caching)</li>
                <li>Kampüs sistemlerinde yapılan güncellemeler</li>
                <li>Kullanıcı gizlilik ayarları (profil gizleme)</li>
                <li>MongoDB önbellek sistemi (5 dakikalık cache)</li>
              </ul>
              <div className="mt-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-800">
                  ⚠️ <strong>Sorumluluk Reddi:</strong> Platform yöneticileri, verilen istatistiklerin doğruluğunu garanti etmez. 
                  Resmi veriler için <a href="https://profile.intra.42.fr" target="_blank" rel="noopener noreferrer" className="underline">42 Intra</a>'yı kullanınız.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Hesap Güvenliği</h2>
              <p className="text-(--text-secondary) mb-3">
                Kullanıcılar, hesap güvenliğinden <strong>kendileri sorumludur</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Session token'ınızı <strong>kimseyle paylaşmayın</strong>.</li>
                <li>Genel bilgisayarlarda kullanım sonrası <strong>çıkış yapın</strong> (logout).</li>
                <li>localStorage'ı <strong>manuel olarak temizlemeyin</strong> (oturum kopabilir).</li>
                <li>Şüpheli aktivite fark ederseniz <strong>hemen çıkış yapın</strong>.</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                Platform, güvenlik amaçlı <strong>IP adresi ve cihaz bilgisi</strong> kaydeder. Bu veriler 30 gün süreyle saklanır ve 
                şüpheli aktivite tespitinde kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Fikri Mülkiyet Hakları</h2>
              <p className="text-(--text-secondary)">
                Platform kaynak kodları <strong>açık kaynak</strong> olabilir (GitHub deposuna göre), ancak aşağıdaki kısıtlamalar geçerlidir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Platform adı ve logosu <strong>ticari amaçla kullanılamaz</strong>.</li>
                <li>Fork/clone yapılan projeler <strong>kaynak belirtmelidir</strong> (attribution).</li>
                <li>42 Network logosu ve markaları <strong>École 42'nin mülkiyetindedir</strong>.</li>
                <li>API verileri <strong>42 Intra'ya aittir</strong>, platform sadece aracıdır.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Hizmet Kesintileri</h2>
              <p className="text-(--text-secondary)">
                Platform yöneticileri, aşağıdaki durumlarda hizmeti geçici veya kalıcı olarak durdurma hakkını saklı tutar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>Bakım ve güncelleme çalışmaları</li>
                <li>42 Intra API değişiklikleri</li>
                <li>Sunucu maliyetlerinin karşılanamaması</li>
                <li>KVKK/GDPR ihlali tespiti</li>
                <li>42 Network tarafından API erişiminin kapatılması</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Kullanıcı Hesaplarının Askıya Alınması</h2>
              <p className="text-(--text-secondary) mb-3">
                Aşağıdaki durumlarda hesabınız <strong>uyarı vermeden askıya alınabilir</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>API üzerinden spam/flood istekleri gönderme</li>
                <li>Diğer kullanıcıların verilerini kötüye kullanma</li>
                <li>Platform güvenliğini tehdit eden aktiviteler</li>
                <li>42 Network hesabının kapatılması</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Üçüncü Taraf Bağlantılar</h2>
              <p className="text-(--text-secondary)">
                Platform, <strong>42 Intra</strong> ve diğer harici sitelere bağlantılar içerebilir. Bu sitelerin gizlilik politikaları 
                ve içeriklerinden 42 Watcher sorumlu değildir. Harici linklere tıklamadan önce ilgili sitenin kullanım koşullarını inceleyiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Değişiklikler</h2>
              <p className="text-(--text-secondary)">
                Bu kullanım koşulları <strong>önceden bildirim olmaksızın güncellenebilir</strong>. Önemli değişiklikler dashboard üzerinden 
                duyurulacaktır. Kullanmaya devam ederek güncel koşulları kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Uygulanacak Hukuk</h2>
              <p className="text-(--text-secondary)">
                Bu kullanım koşulları, <strong>Türkiye Cumhuriyeti kanunlarına</strong> tabidir. Uyuşmazlık durumunda 
                <strong>İstanbul mahkemeleri ve icra daireleri</strong> yetkilidir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. İletişim</h2>
              <p className="text-(--text-secondary)">
                Kullanım koşulları hakkında sorularınız için:
              </p>
              <div className="mt-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                <p className="text-sm text-(--text-secondary)">
                  <strong>İsmail Han Duman</strong><br />
                  E-posta: <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">iduman@student.42istanbul.com.tr</a><br />
                  Website: <a href="https://sinek.dev" target="_blank" rel="noopener noreferrer" className="text-(--primary) hover:opacity-80">sinek.dev</a>
                </p>
              </div>
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

export default TermsOfUse;
