import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Hero from "./Hero";
import Career from "./Career";
import Season2025 from "./Season2025";
import Season2026 from "./Season2026";
import PressReleases from "./PressReleases";
import Palmares from "./Palmares";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-athena-black text-white min-h-screen">
      {/* Navigation responsive */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#111]/95 backdrop-blur border-b border-[#a67c00]/40 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Titre principal */}
          <h1 className="text-[#d4af37] font-semibold tracking-wide text-sm md:text-base">
            ATHÉNA — <span className="text-[#f5d88c]">La Révolution Féminine de la F1</span>
          </h1>

          {/* Menu burger mobile */}
          <button
            className="md:hidden text-[#d4af37] text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center gap-6 text-[15px] text-[#f8f8f8] font-light">
            <li><a href="#home" className="hover:text-[#d4af37]">Accueil</a></li>
            <li><a href="#profil" className="hover:text-[#d4af37]">Profil</a></li>
            <li><a href="#career" className="hover:text-[#d4af37]">Carrière</a></li>
            <li><a href="#season2025" className="hover:text-[#d4af37]">Saison 2025</a></li>
            <li><a href="#season2026" className="hover:text-[#d4af37]">Saison 2026</a></li>
            <li><a href="#press" className="hover:text-[#d4af37]">Presse</a></li>
          </ul>
        </nav>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 text-lg bg-[#111]/95 py-4 border-t border-[#a67c00]/30"
          >
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a></li>
            <li><a href="#profil" onClick={() => setMenuOpen(false)}>Profil</a></li>
            <li><a href="#career" onClick={() => setMenuOpen(false)}>Carrière</a></li>
            <li><a href="#season2025" onClick={() => setMenuOpen(false)}>Saison 2025</a></li>
            <li><a href="#season2026" onClick={() => setMenuOpen(false)}>Saison 2026</a></li>
            <li><a href="#press" onClick={() => setMenuOpen(false)}>Presse</a></li>
          </motion.ul>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* PROFIL */}
      <section
        id="profil"
        className="py-24 px-6 md:px-32 bg-athena-blue/10 text-center relative overflow-hidden"
      >
        <h2 className="text-3xl font-bold text-athena-gold mb-10">
          Mieux connaître Séréna Salvini
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto text-left">
          {/* Infos */}
          <motion.div
            className="flex-1 bg-athena-black/70 border border-athena-gold rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p><strong>Nom complet :</strong> Séréna Salvini</p>
            <p><strong>Nationalité :</strong> Italienne 🇮🇹</p>
            <p><strong>Âge :</strong> 18 ans</p>
            <p><strong>Équipe :</strong> BWT Alpine F1 Team</p>
            <p><strong>Numéro :</strong> 15</p>
            <p><strong>Date de naissance :</strong> 12 mars</p>
            <p><strong>Lieu de naissance :</strong> Mouscron (Belgique)</p>
            <p><strong>Club de foot préféré :</strong> Olympique de Marseille 💙🤍</p>
            <p><strong>Équipe NBA :</strong> Golden State Warriors 💛💙</p>
            <p><strong>Idole :</strong> Lionel Messi 🐐</p>
            <p><strong>Plat préféré :</strong> Pâtes 🍝</p>
            <p>
              <strong>Meilleure amie :</strong>{" "}
              Amélia Étienne (
              <a
                href="https://instagram.com/ameliatnn"
                target="_blank"
                className="text-athena-rose hover:underline"
              >
                @ameliatnn
              </a>
              )
            </p>

            {/* Réseaux */}
            <div className="mt-6 space-y-2 text-center">
              <p>
                <strong>Twitter :</strong>{" "}
                <a
                  href="https://twitter.com/Serenaaade_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-athena-gold hover:text-athena-rose transition underline"
                >
                  @Serenaaade_
                </a>
              </p>

              <p>
                <strong>Instagram :</strong>{" "}
                <a
                  href="https://instagram.com/Serenaaade_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-athena-gold hover:text-athena-rose transition underline"
                >
                  @Serenaaade_
                </a>
              </p>
            </div>

            <p className="italic text-athena-rose mt-6">
              « Le sport, c’est plus qu’une passion — c’est mon langage. »
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-1 max-w-sm rounded-2xl overflow-hidden border-2 border-athena-gold shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/galerie/serena-om-warriors.jpg"
              alt="Séréna Salvini avec maillot OM et Warriors"
              className="w-full h-full object-cover brightness-110 contrast-110 hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* AUTRES SECTIONS */}
      <section id="career"><Career /></section>
      <section id="season2025"><Season2025 /></section>
      <section id="season2026"><Season2026 /></section>
      <section id="palmares"><Palmares /></section>
      <section id="press"><PressReleases /></section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-athena-gold bg-athena-black/90">
        <p className="text-athena-gold text-sm">
          © 2026 Serena Salvini — BWT Alpine F1 Team — Dior — Louboutin — Naked Wolfe — TAG Heuer — Sephora
        </p>
      </footer>
    </div>
  );
}

export default App;
