import "./App.css";
import NameHeader from "./components/NameHeader";
import EffectCoverFlow from "./components/EffectCoverFlow";
import EffetCube from "./components/EffetCube";
import BigSwiperAuto from "./components/BigSwiperAuto";
import { bigslides, marr } from "./constants/photodata";

function App() {
  const year = new Date().getFullYear();
  document.title = "Karthik";
  return (
    <div className="app-container">
      <header className="header">
        <NameHeader />
      </header>

      <main className="main-section">
        <section className="coverflow-section">
          <h2>Photo Gallery</h2>
          <EffectCoverFlow />
        </section>
        <section>
          <h2>Vibing.!</h2>
          <BigSwiperAuto images={marr} />
        </section>
        <section className="cube-section">
          <h2>3D Cube Showcase</h2>
          <EffetCube />
        </section>
        <section>
          <h2>Freinds & Family</h2>
          <BigSwiperAuto images={bigslides} />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} Karthik's Gallery. All rights reserved.</p>
        <p>Created By Lokesh Chary Gattoji</p>
      </footer>
    </div>
  );
}

export default App;
