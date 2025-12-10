import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

function Disclaimer() {
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
          <h1 className="text-3xl font-bold text-(--text-primary) mb-6">Yasal Uyarı ve Sorumluluk Reddi</h1>
          
          <div className="space-y-6 text-(--text-primary)">
            <div className="p-4 rounded-lg bg-yellow-50 border-2 border-yellow-400">
              <p className="text-sm text-yellow-900 font-semibold">
                ⚠️ ÖNEMLI: Bu platform, 42 Network veya École 42 ile <strong>resmi bir bağlantısı olmayan</strong> bağımsız bir öğrenci projesidir.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Resmi Bağlantı Reddi</h2>
              <p className="text-(--text-secondary) mb-3">
                42 Watcher platformu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>École 42</strong> tarafından desteklenmemekte veya onaylanmamaktadır.</li>
                <li><strong>42 Network</strong>'ün resmi bir ürünü değildir.</li>
                <li><strong>42 Intra</strong>'nın alternatifi veya resmi uzantısı değildir.</li>
                <li>Herhangi bir kampüs yönetimi tarafından <strong>endorse edilmemiştir</strong>.</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                Platform, sadece <strong>42 Intra API</strong>'sini kullanan üçüncü taraf bir araçtır. Resmi bilgiler için 
                <a href="https://profile.intra.42.fr" target="_blank" rel="noopener noreferrer" className="text-(--primary) hover:opacity-80"> 42 Intra</a>'yı ziyaret ediniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Veri Doğruluğu Reddi</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform üzerinde sunulan veriler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>Garanti edilmez</strong> - Veriler API gecikmelerinden etkilenebilir.</li>
                <li><strong>Gerçek zamanlı değildir</strong> - 5 dakikalık cache süresi vardır.</li>
                <li><strong>Tam kapsamlı olmayabilir</strong> - Gizlilik ayarları verileri gizleyebilir.</li>
                <li><strong>Değişebilir</strong> - 42 Intra veri yapısı güncellenebilir.</li>
              </ul>
              <div className="mt-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-800">
                  🚫 <strong>UYARI:</strong> Akademik değerlendirmeler veya resmi başvurular için bu platformdaki verileri kullanmayınız. 
                  Resmi kayıtlar için 42 Intra'yı referans alınız.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Hizmet Sürekliliği Garantisi Yok</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform yöneticileri şu garantileri <strong>vermez</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li>7/24 hizmet sürekliliği</li>
                <li>Veri kaybı olmayacağı</li>
                <li>API hatalarının hemen düzeltileceği</li>
                <li>Uzun dönem hizmet devamı</li>
                <li>Geri dönüşümlü backup'lar</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                Platform, <strong>herhangi bir zamanda bildirim yapmadan</strong> kapatılabilir veya API erişimi 42 Network tarafından 
                engellenebilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Sorumluluk Sınırlamaları</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform yöneticileri, aşağıdaki durumlardan <strong>sorumlu tutulamaz</strong>:
              </p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-1">🔴 Teknik Sorunlar</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Sunucu çökmesi, API hataları, veri kaybı, güvenlik ihlalleri
                  </p>
                </div>

                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-1">🟠 Veri İhlalleri</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Hatalı veriler, eksik istatistikler, yanlış hesaplamalar, cache hataları
                  </p>
                </div>

                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-1">🟡 Üçüncü Taraf Hataları</h3>
                  <p className="text-sm text-(--text-secondary)">
                    42 Intra API değişiklikleri, OAuth sistemi arızaları, MongoDB kesintileri
                  </p>
                </div>

                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                  <h3 className="font-semibold text-(--text-primary) mb-1">🟢 Kullanıcı Hataları</h3>
                  <p className="text-sm text-(--text-secondary)">
                    Yanlış veri yorumlama, token paylaşımı, güvenlik ihlalleri
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. API Kullanım Limitleri</h2>
              <p className="text-(--text-secondary)">
                Platform, 42 Intra API'sinin <strong>1200 istek/saat limitine</strong> tabidir. Bu limitin aşılması durumunda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4 mt-3">
                <li>Veriler geçici olarak yüklenemeyebilir</li>
                <li>Cache'lenmiş eski veriler gösterilir</li>
                <li>Bazı özellikler devre dışı kalabilir</li>
                <li>Kullanıcılar geçici olarak erişim sağlayamayabilir</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                Bu durum <strong>platform hatasından kaynaklanmaz</strong> ve yöneticiler sorumlu tutulamaz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Harici Bağlantılar</h2>
              <p className="text-(--text-secondary)">
                Platform şu harici linklere yönlendirme yapabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4 mt-3">
                <li><strong>42 Intra</strong> (profile.intra.42.fr)</li>
                <li><strong>42 API</strong> (api.intra.42.fr)</li>
                <li><strong>GitHub</strong> (kaynak kodu)</li>
              </ul>
              <p className="text-(--text-secondary) mt-3">
                Bu sitelerin içeriği, gizlilik politikaları ve güvenliğinden <strong>42 Watcher sorumlu değildir</strong>. 
                Harici linklere tıklamadan önce ilgili sitenin koşullarını inceleyiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Güvenlik Uyarıları</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-800">
                    🚨 <strong>Session Token Güvenliği:</strong> Token'ınızı kimseyle paylaşmayın. Platform yöneticileri 
                    <strong> asla token bilgisi talep etmez</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <p className="text-sm text-orange-800">
                    ⚠️ <strong>Genel Bilgisayarlar:</strong> Ortak kullanılan cihazlarda mutlaka çıkış yapınız. 
                    localStorage temizlenmezse oturumunuz açık kalabilir.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    💡 <strong>IP Kayıtları:</strong> Güvenlik amaçlı IP adresi ve cihaz bilgileri kaydedilir. 
                    Şüpheli aktivite tespit edilirse hesap askıya alınabilir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Fikri Mülkiyet Uyarıları</h2>
              <p className="text-(--text-secondary) mb-3">
                Platform kullanımında şu marka/telif haklarına dikkat ediniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-(--text-secondary) ml-4">
                <li><strong>"42"</strong> logosu ve markası <strong>École 42</strong>'nin tescilli markasıdır.</li>
                <li><strong>"42 Network"</strong> ismi École 42'ye aittir.</li>
                <li>API verileri <strong>42 Intra</strong>'nın mülkiyetindedir.</li>
                <li>Platform kaynak kodu <strong>açık kaynak lisansına</strong> tabi olabilir (GitHub'a bakınız).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. KVKK ve GDPR Uyumluluğu</h2>
              <p className="text-(--text-secondary)">
                Platform, <strong>6698 sayılı KVKK</strong> ve <strong>GDPR</strong> mevzuatına uygun olarak tasarlanmıştır. 
                Ancak veri işleme süreçlerinde <strong>hatalar olabilir</strong>. Kişisel verilerinizin silinmesi veya düzeltilmesi 
                için <Link to="/kvkk" className="text-(--primary) hover:opacity-80">KVKK sayfasını</Link> inceleyiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Değişiklikler ve Güncellemeler</h2>
              <p className="text-(--text-secondary)">
                Bu yasal uyarı metni <strong>önceden bildirim olmaksızın güncellenebilir</strong>. Kullanmaya devam ederek 
                güncel koşulları kabul etmiş sayılırsınız. Önemli değişiklikler dashboard üzerinden duyurulacaktır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. İletişim ve Şikayetler</h2>
              <p className="text-(--text-secondary) mb-3">
                Herhangi bir sorun, şikayet veya hukuki talep için:
              </p>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-input)' }}>
                <p className="text-sm text-(--text-secondary)">
                  <strong>Veri Sorumlusu:</strong> İsmail Han Duman<br />
                  <strong>E-posta:</strong> <a href="mailto:iduman@student.42istanbul.com.tr" className="text-(--primary) hover:opacity-80">iduman@student.42istanbul.com.tr</a><br />
                  <strong>Website:</strong> <a href="https://sinek.dev" target="_blank" rel="noopener noreferrer" className="text-(--primary) hover:opacity-80">sinek.dev</a><br />
                  <strong>Yanıt Süresi:</strong> En geç 30 gün içinde
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Kabul Beyanı</h2>
              <p className="text-(--text-secondary)">
                Bu platformu kullanarak, yukarıdaki tüm sorumluluk reddi maddelerini <strong>okuduğunuzu ve kabul ettiğinizi </strong> 
                beyan edersiniz. Kabul etmiyorsanız platformu kullanmayınız.
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

export default Disclaimer;
