import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import Snowfall from 'react-snowfall';

function Contact() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="min-h-screen transition-colors duration-300">
      <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 9999 }} />
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
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">İletişim</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <section>
              <h2 className="text-xl font-semibold mb-3">Veri Sorumlusu Bilgileri</h2>
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                <div className="space-y-3 text-(--text-secondary)">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="font-semibold text-(--text-primary)">Ad Soyad</p>
                      <p>İsmail Han Duman</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <p className="font-semibold text-(--text-primary)">Öğrenci Login</p>
                      <p>iduman</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold text-(--text-primary)">E-posta Adresi</p>
                      <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">
                        iduman@student.42istanbul.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="font-semibold text-(--text-primary)">Website</p>
                      <a href="https://sinek.dev" target="_blank" rel="noopener noreferrer" className="text-(--primary) hover:opacity-80">
                        sinek.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <p className="font-semibold text-(--text-primary)">Kampüs</p>
                      <p>42 Istanbul</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">KVKK Başvuru Yöntemi</h2>
              <p className="text-(--text-secondary) mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 11. maddesi kapsamında aşağıdaki haklarınızı kullanabilirsiniz:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">✅ Bilgi Alma Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Hangi verilerinizin işlendiğini öğrenme</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">🔍 Amaç Öğrenme Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Verilerinizin işlenme amacını sorma</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">📋 Listeleme Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Hangi verilerin 3. taraflara aktarıldığını görme</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">✏️ Düzeltme Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Hatalı verilerin düzeltilmesini talep etme</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">🗑️ Silme Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Verilerinizin silinmesini isteme</p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <p className="font-semibold text-(--text-primary) mb-2">🚫 İtiraz Hakkı</p>
                  <p className="text-sm text-(--text-secondary)">Veri işlemeye itiraz etme</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-blue-800">
                  💡 <strong>Başvuru Süreci:</strong> Talebinizi e-posta yoluyla gönderdiğinizde, kimliğinizi doğrulama amacıyla 
                  42 Intra hesabınızdan giriş yapmanız istenebilir. Başvurular <strong>30 gün içinde</strong> yanıtlanır.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Başvuru Şablonu</h2>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                <pre className="text-sm text-(--text-secondary) whitespace-pre-wrap">
{`Konu: KVKK Kapsamında Veri Talebi

Sayın İsmail Han Duman,

42 Watcher platformu üzerinde kayıtlı kullanıcı olarak, 6698 sayılı Kişisel 
Verilerin Korunması Kanunu'nun 11. maddesi kapsamında aşağıdaki talepte 
bulunuyorum:

[ ] Kişisel verilerimin işlenip işlenmediğini öğrenmek
[ ] İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenmek
[ ] Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilmek
[ ] Eksik veya yanlış işlenmişse düzeltilmesini talep etmek
[ ] Kanunda öngörülen şartlar çerçevesinde silinmesini istemek
[ ] Düzeltme/silme işlemlerinin 3. kişilere bildirilmesini talep etmek
[ ] İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi 
    suretiyle aleyhime bir sonuç doğmasına itiraz etmek
[ ] Kanuna aykırı veri işleme nedeniyle zararımın giderilmesini talep etmek

42 Intra Login: [login_adınız]
E-posta: [email_adresiniz]
Tarih: [DD/MM/YYYY]

Saygılarımla,
[Ad Soyad]`}
                </pre>
              </div>
              <p className="text-xs text-(--text-tertiary) mt-2">
                Bu şablonu kopyalayarak <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">iduman@student.42istanbul.com.tr</a> adresine gönderebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Sık Sorulan Sorular</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❓ Verilerim ne kadar süre saklanır?</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Session verileri <strong>30 gün</strong>, güvenlik logları (IP/cihaz bilgisi) <strong>6 ay</strong> süreyle saklanır. 
                    Bu süreler sonunda otomatik olarak silinir.
                  </p>
                </div>

                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❓ Hesabımı nasıl silerim?</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Platform kullanıcı hesapları oluşturmaz, sadece 42 OAuth ile oturum açarsınız. 
                    "Logout" yaparak session verilerinizi silebilirsiniz. Kalıcı silme için KVKK başvurusu yapınız.
                  </p>
                </div>

                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❓ IP adresim neden kaydediliyor?</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Güvenlik amaçlı. Şüpheli aktivite (spam, API abuse) tespiti için gereklidir. 
                    IP verileri <strong>AES-256 şifreleme</strong> ile korunur ve 6 ay sonra silinir.
                  </p>
                </div>

                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❓ Başvuruma ne kadar sürede cevap alırım?</h3>
                  <p className="text-sm text-(--text-secondary)">
                    KVKK'ya göre <strong>en geç 30 gün</strong> içinde yanıt verilir. Basit talepler (veri listeleme) 
                    genellikle 7-10 gün içinde cevaplanır.
                  </p>
                </div>

                <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-2">❓ Şikayet nereye yapılır?</h3>
                  <p className="text-sm text-(--text-secondary)">
                    İlk olarak yukarıdaki e-posta adresine başvurunuz. Yanıt alamazsanız 
                    <strong> Kişisel Verileri Koruma Kurumu</strong>'na (kvkk.gov.tr) şikayet edebilirsiniz.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Teknik Destek</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform kullanımı ile ilgili teknik sorunlar için:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>E-posta: <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">iduman@student.42istanbul.com.tr</a></li>
                <li>Konu satırına <strong>"[DESTEK]"</strong> yazınız</li>
                <li>Hata ekran görüntüsü ve tarayıcı bilgisi ekleyiniz</li>
                <li>42 Intra login adresinizi belirtiniz</li>
              </ul>
              <div className="mt-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
                <p className="text-sm text-orange-800">
                  ⏱️ <strong>Yanıt Süresi:</strong> Teknik destek talepleri iş yoğunluğuna göre 3-7 gün içinde yanıtlanır. 
                  Acil güvenlik sorunları 24 saat içinde değerlendirilir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Gizlilik Politikası</h2>
              <p className="text-(--text-secondary)">
                Kişisel verilerinizin nasıl işlendiği hakkında detaylı bilgi için:
              </p>
              <div className="mt-3 flex gap-3 flex-wrap">
                <Link to="/privacy-policy" className="px-4 py-2 rounded-lg text-(--primary) border border-(--primary) hover:bg-(--primary) hover:text-white transition">
                  Gizlilik Politikası
                </Link>
                <Link to="/kvkk" className="px-4 py-2 rounded-lg text-(--primary) border border-(--primary) hover:bg-(--primary) hover:text-white transition">
                  KVKK Aydınlatma Metni
                </Link>
                <Link to="/cookie-policy" className="px-4 py-2 rounded-lg text-(--primary) border border-(--primary) hover:bg-(--primary) hover:text-white transition">
                  Çerez Politikası
                </Link>
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

export default Contact;
