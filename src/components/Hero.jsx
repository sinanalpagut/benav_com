export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="wrap">
        <span className="kicker">Mobil Uygulama Geliştiricisi</span>
        <h1>Günlük hayatı kolaylaştıran Mobil uygulamaları geliştiriyorum.</h1>
        <p className="lead">
          Ben benav. Fikirden Google Play ve App Store'a kadar her aşamada; sade, işlevsel ve
          özenli mobil deneyimler tasarlıyorum.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#apps">Uygulamalarımı keşfet</a>
          <a className="btn btn-ghost" href="#about">İletişime geç</a>
        </div>
      </div>
    </section>
  );
}
