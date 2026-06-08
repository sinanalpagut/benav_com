import { useNavScroll } from "../hooks";

export default function Nav({ theme, onToggleTheme }) {
  const scrolled = useNavScroll();
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")} data-screen-label="Navigasyon">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="benav ana sayfa">
          <span className="mark">b</span> benav
        </a>
        <nav className="nav-right">
          <div className="nav-links">
            <a href="#apps">Uygulamalar</a>
            <a href="#about">Hakkımda</a>
          </div>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Temayı değiştir"
            title="Açık / Karanlık tema"
            onClick={onToggleTheme}
          >
            <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
