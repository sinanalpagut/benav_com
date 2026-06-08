import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Apps from "./components/Apps";
import About from "./components/About";
import Footer from "./components/Footer";
import { useTheme, useReveals } from "./hooks";

export default function App() {
  const { theme, toggle } = useTheme();
  // İçerik bağlandıktan sonra reveal animasyonlarını başlat
  useReveals([]);

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="top">
        <Hero />
        <Apps />
        <About />
      </main>
      <Footer />
    </>
  );
}
