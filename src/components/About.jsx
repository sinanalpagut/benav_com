import { SITE } from "../data/apps";

export default function About() {
  const mailto = `mailto:${SITE.email}`;
  return (
    <section className="block about" id="about" data-screen-label="Hakkımda">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-bio reveal">
            <span className="eyebrow">Hakkımda</span>
            <h2>Sadelik ve özenle.</h2>
            <p>
              Mobil dünyada işlevsel ve insana dokunan uygulamalar geliştiriyorum. Fikirden Google
              Play ve App Store'a kadar tasarım, geliştirme ve en küçük detaya gösterilen özen benim
              için aynı önemde.
            </p>
            <p>
              Amacım; karmaşadan uzak, anlaşılır ve kullanıcıların günlük hayatına küçük ama anlamlı
              katkılar sunan uygulamalar üretmek.
            </p>
          </div>
          <aside className="contact-card reveal" style={{ transitionDelay: "90ms" }}>
            <span className="eyebrow">İletişim</span>
            <div className="lbl">Her türlü soru ve öneriniz için</div>
            <a className="email" href={mailto}>{SITE.email}</a>
            <a className="btn btn-primary" href={mailto}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
              E-posta gönder
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
