import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [chartData] = useState([
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 40 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 55 },
    { month: 'May', value: 50 },
    { month: 'Jun', value: 65 },
    { month: 'Jul', value: 75 },
    { month: 'Aug', value: 85 },
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">⟡</span>
            <h1>Kristalin Ekalestari</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Tentang Kami</a></li>
              <li><a href="#services">Layanan</a></li>
              <li><a href="#invest">Investasi</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </nav>
          <button className="cta-button">Mulai Investasi</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>
            Masa Depan Emas <span className="gold-text">Dimulai Hari Ini</span>
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'fade-in-delay' : ''}`}>
            Kristalin Ekalestari - Solusi investasi emas terpercaya untuk keamanan finansial Anda
          </p>
          <div className={`hero-buttons ${isVisible ? 'fade-in-delay-2' : ''}`}>
            <button className="primary-button">Mulai Investasi</button>
            <button className="secondary-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="gold-bar-container">
            <div className="gold-bar gold-bar-1"></div>
            <div className="gold-bar gold-bar-2"></div>
            <div className="gold-bar gold-bar-3"></div>
            <div className="gold-reflection"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number counter">15+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
          <div className="stat-item">
            <div className="stat-number counter">5000+</div>
            <div className="stat-label">Klien Puas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number counter">99.9%</div>
            <div className="stat-label">Emas Murni</div>
          </div>
          <div className="stat-item">
            <div className="stat-number counter">24/7</div>
            <div className="stat-label">Dukungan Pelanggan</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2>Tentang Kristalin Ekalestari</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-container">
          <div className={`about-image ${scrollY > 300 ? 'fade-in' : ''}`}>
            <div className="gold-coin"></div>
            <div className="gold-sparkle sparkle-1"></div>
            <div className="gold-sparkle sparkle-2"></div>
            <div className="gold-sparkle sparkle-3"></div>
          </div>
          <div className={`about-content ${scrollY > 300 ? 'slide-in-right' : ''}`}>
            <h3>Membangun Masa Depan dengan Emas</h3>
            <p>Kristalin Ekalestari adalah perusahaan perdagangan emas terkemuka yang berdedikasi untuk menyediakan layanan investasi emas berkualitas tinggi. Dengan pengalaman lebih dari 15 tahun di industri logam mulia, kami telah membantu ribuan klien membangun portofolio investasi yang aman dan menguntungkan.</p>
            <p>Kami menawarkan berbagai produk dan layanan terkait investasi emas, termasuk pembelian dan penjualan emas batangan, program tabungan emas, dan konsultasi investasi logam mulia.</p>
            <ul className="about-features">
              <li><span className="feature-icon">✓</span> Emas bersertifikat internasional</li>
              <li><span className="feature-icon">✓</span> Harga transparan dan kompetitif</li>
              <li><span className="feature-icon">✓</span> Penyimpanan aman dan terjamin</li>
              <li><span className="feature-icon">✓</span> Kemudahan transaksi kapan saja</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Layanan Kami</h2>
          <div className="section-divider"></div>
        </div>
        <div className="services-container">
          <div className={`service-card ${scrollY > 800 ? 'fade-in' : ''}`}>
            <div className="service-icon">
              <i className="service-icon-bar"></i>
            </div>
            <h3>Jual Beli Emas Batangan</h3>
            <p>Beli dan jual emas batangan bersertifikat dengan harga pasar terbaik dan transparan.</p>
          </div>
          <div className={`service-card ${scrollY > 800 ? 'fade-in-delay' : ''}`}>
            <div className="service-icon">
              <i className="service-icon-savings"></i>
            </div>
            <h3>Tabungan Emas</h3>
            <p>Program tabungan emas fleksibel yang memungkinkan Anda berinvestasi mulai dari jumlah kecil.</p>
          </div>
          <div className={`service-card ${scrollY > 800 ? 'fade-in-delay-2' : ''}`}>
            <div className="service-icon">
              <i className="service-icon-vault"></i>
            </div>
            <h3>Penyimpanan Emas</h3>
            <p>Layanan penyimpanan emas aman dengan jaminan keamanan 24/7 dan asuransi penuh.</p>
          </div>
          <div className={`service-card ${scrollY > 800 ? 'fade-in-delay-3' : ''}`}>
            <div className="service-icon">
              <i className="service-icon-chart"></i>
            </div>
            <h3>Konsultasi Investasi</h3>
            <p>Saran ahli untuk membantu Anda membangun dan mengelola portofolio investasi emas.</p>
          </div>
        </div>
      </section>

      {/* Gold Price Chart Section */}
      <section id="invest" className="chart-section">
        <div className="section-header">
          <h2>Tren Harga Emas</h2>
          <div className="section-divider"></div>
        </div>
        <div className="chart-container">
          <div className={`chart-wrapper ${scrollY > 1300 ? 'fade-in' : ''}`}>
            <div className="chart">
              <div className="chart-labels">
                {chartData.map((data, index) => (
                  <div key={index} className="chart-label">{data.month}</div>
                ))}
              </div>
              <div className="chart-bars">
                {chartData.map((data, index) => (
                  <div 
                    key={index} 
                    className="chart-bar"
                    style={{
                      height: `${data.value}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="chart-value">{data.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`chart-info ${scrollY > 1300 ? 'slide-in-right' : ''}`}>
            <h3>Investasi yang Stabil di Masa Tidak Pasti</h3>
            <p>Emas telah terbukti menjadi aset yang stabil selama periode ketidakpastian ekonomi. Grafik ini menunjukkan tren pertumbuhan harga emas dalam beberapa bulan terakhir.</p>
            <p>Dengan Kristalin Ekalestari, Anda dapat melacak pergerakan harga emas secara real-time dan membuat keputusan investasi yang tepat.</p>
            <button className="chart-button">Analisis Lebih Lanjut</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Apa Kata Klien Kami</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-container">
          <div className={`testimonial-card ${scrollY > 1800 ? 'fade-in' : ''}`}>
            <div className="quote-icon">"</div>
            <p className="testimonial-text">Saya telah berinvestasi emas dengan Kristalin Ekalestari selama 5 tahun, dan saya sangat puas dengan layanan profesional mereka. Portofolio emas saya telah tumbuh secara signifikan!</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Arif Setiawan</h4>
                <p>Owner</p>
              </div>
            </div>
          </div>
          <div className={`testimonial-card ${scrollY > 1800 ? 'fade-in-delay' : ''}`}>
            <div className="quote-icon">"</div>
            <p className="testimonial-text">Program tabungan emas mereka sangat fleksibel dan mudah digunakan. Saya bisa mulai dengan jumlah kecil dan secara bertahap membangun investasi emas saya.</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Siti Rahayu</h4>
                <p>Nasabah Tabungan Emas</p>
              </div>
            </div>
          </div>
          <div className={`testimonial-card ${scrollY > 1800 ? 'fade-in-delay-2' : ''}`}>
            <div className="quote-icon">"</div>
            <p className="testimonial-text">Layanan konsultasi investasi mereka sangat membantu. Konsultan mereka memberikan saran yang disesuaikan dengan tujuan keuangan jangka panjang saya.</p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Ahmad Wijaya</h4>
                <p>Pengusaha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className={`cta-container ${scrollY > 2200 ? 'scale-in' : ''}`}>
          <h2>Mulai Investasi Emas Hari Ini</h2>
          <p>Amankan masa depan finansial Anda dengan investasi emas yang terpercaya dan terjamin.</p>
          <div className="cta-buttons">
            <button className="cta-primary-button">Buka Akun</button>
            <button className="cta-secondary-button">Hubungi Konsultan</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Hubungi Kami</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-container">
          <div className={`contact-info ${scrollY > 2600 ? 'fade-in' : ''}`}>
            <div className="contact-item">
              <div className="contact-icon location-icon"></div>
              <div>
                <h4>Alamat</h4>
                <p>Jl. Emas Murni No. 123, Jakarta Selatan, Indonesia</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <div>
                <h4>Telepon</h4>
                <p>+62 21 555 7890</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <div>
                <h4>Email</h4>
                <p>info@kristalinekalestari.com</p>
              </div>
            </div>
            <div className="social-media">
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon instagram"></a>
              <a href="#" className="social-icon twitter"></a>
              <a href="#" className="social-icon linkedin"></a>
            </div>
          </div>
          <div className={`contact-form ${scrollY > 2600 ? 'slide-in-right' : ''}`}>
            <h3>Kirim Pesan</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Nomor Telepon" />
              </div>
              <div className="form-group">
                <textarea placeholder="Pesan Anda" rows="5" required></textarea>
              </div>
              <button type="submit" className="form-button">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-icon">⟡</span>
            <h2>Kristalin Ekalestari</h2>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Layanan</h3>
              <ul>
                <li><a href="#">Jual Beli Emas</a></li>
                <li><a href="#">Tabungan Emas</a></li>
                <li><a href="#">Penyimpanan Emas</a></li>
                <li><a href="#">Konsultasi Investasi</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Perusahaan</h3>
              <ul>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Tim Kami</a></li>
                <li><a href="#">Karir</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Syarat & Ketentuan</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">Lisensi</a></li>
                <li><a href="#">Sertifikasi</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Kristalin Ekalestari. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

export default App