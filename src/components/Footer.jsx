import { APPS, SITE } from "../data/apps";

export default function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${SITE.email}`;
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <a className="brand" href="#top"><span className="mark">b</span> benav</a>
            <p className="tagline">
              Sade ve özenli Android uygulamaları. Google Play'de. Çok Yakında Apple Store'da da
              hizmetinizdeyiz
            </p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <ul>
              <li><a href="#apps">Uygulamalar</a></li>
              <li><a href="#about">Hakkımda</a></li>
              <li><a href={mailto}>İletişim</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Gizlilik Politikaları</h4>
            <ul id="footer-privacy">
              {APPS.map((a) => (
                <li key={a.id}><a href={a.privacy}>{a.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{year}</span> benav. Tüm hakları saklıdır.</span>
          <span>Türkiye'de tasarlandı ve geliştirildi.</span>
        </div>
      </div>
    </footer>
  );
}
