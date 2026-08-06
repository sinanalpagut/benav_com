import { useState } from "react";
import { APPS } from "../data/apps";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.3a1 1 0 0 0-.5.9v17.6a1 1 0 0 0 .5.9l9.8-9.7L3.6 2.3Zm11.2 7.9 2.9-1.7-3.6-2.1-2.6 2.6 3.3 1.2Zm0 3.6-3.3 1.2 2.6 2.6 3.6-2.1-2.9-1.7Zm1.6-.9 3.4-2c.6-.4.6-1.2 0-1.6l-3.4-2-2.4 2.8 2.4 2.8Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c-.02-2.07 1.69-3.06 1.77-3.11-.96-1.41-2.46-1.6-2.99-1.62-1.27-.13-2.49.75-3.13.75-.65 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69.99 1.51 2.1 2.58 2.06 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.6.67 2.7.65 1.11-.02 1.82-1.01 2.5-2.01.79-1.15 1.11-2.27 1.13-2.33-.02-.01-2.17-.83-2.19-3.29-.02-2.06 1.68-3.05 1.76-3.1ZM15.0 6.34c.57-.69.96-1.65.85-2.61-.82.03-1.82.55-2.41 1.24-.53.61-.99 1.59-.87 2.53.92.07 1.85-.47 2.43-1.16Z" />
    </svg>
  );
}

function StoreButtons({ app }) {
  const buttons = [];
  if (app.googlePlayUrl) {
    buttons.push(
      <a
        key="play"
        className="btn btn-primary store-btn"
        href={app.googlePlayUrl}
        target="_blank"
        rel="noopener"
        aria-label={`${app.name} — Google Play'de görüntüle`}
      >
        <PlayIcon />
        <span className="store-meta"><small>İndirin</small><b>Google Play</b></span>
      </a>
    );
  }
  if (app.appStoreUrl) {
    buttons.push(
      <a
        key="apple"
        className="btn btn-store store-btn"
        href={app.appStoreUrl}
        target="_blank"
        rel="noopener"
        aria-label={`${app.name} — App Store'da görüntüle`}
      >
        <AppleIcon />
        <span className="store-meta"><small>İndirin</small><b>App Store</b></span>
      </a>
    );
  }
  if (buttons.length === 0) {
    return <span className="store-soon">Çok yakında</span>;
  }
  return <>{buttons}</>;
}

function AppCard({ app, index }) {
  const [failed, setFailed] = useState(false);
  const letter = app.name.charAt(0);
  return (
    <article className="app-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className={"app-icon" + (failed ? " is-fallback" : "")} data-letter={letter}>
        <img src={app.icon} alt={`${app.name} ikonu`} decoding="async" onError={() => setFailed(true)} />
        <span className="ph">{letter}</span>
      </div>
      <h3>{app.name}</h3>
      <span className="app-tag">{app.tag}</span>
      <p className="desc">{app.desc}</p>
      <div className="store-row"><StoreButtons app={app} /></div>
      <div className="card-legal">
        <a href={app.privacy}>Gizlilik Politikası</a>
        {app.privacyApple && app.privacyAppleVisible && (
          <>
            <span className="sep">·</span>
            <a href={app.privacyApple}>iOS Gizlilik</a>
          </>
        )}
        {app.deletion && (
          <>
            <span className="sep">·</span>
            <a href={app.deletion}>Hesap Silme</a>
          </>
        )}
      </div>
    </article>
  );
}

export default function Apps() {
  return (
    <section className="block" id="apps" data-screen-label="Uygulamalar">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Çalışmalarım</span>
          <h2>Uygulamalarım</h2>
          <p>
            Google Play ve App Store'da yayınladığım uygulamalar. İncelemek için kartlardaki
            bağlantıyı kullanabilirsiniz.
          </p>
        </div>
        <div className="apps-grid" id="apps-grid">
          {APPS.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
