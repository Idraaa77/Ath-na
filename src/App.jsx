import { motion } from "framer-motion";
import "./index.css";
import Hero from "./Hero";
import Career from "./Career";
import Season2025 from "./Season2025";
import Season2026 from "./Season2026";
import PressReleases from "./PressReleases";
import Palmares from "./Palmares";

function App() {
  return (
    <div className="bg-athena-black text-white min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#111]/95 backdrop-blur border-b border-[#a67c00]/40 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-2">
          <h1 className="text-[#d4af37] font-semibold tracking-wide text-base">
            ATHÉNA — <span className="text-[#f5d88c]">La Révolution Féminine de la F1</span>
          </h1>

          <ul className="flex items-center gap-8 text-[15px] text-[#f8f8f8] font-light">
            <li><a href="#home" className="hover:text-[#d4af37] transition duration-200">Accueil</a></li>
            <li><a href="#profil" className="hover:text-[#d4af37] transition duration-200">Profil</a></li>
            <li><a href="#career" className="hover:text-[#d4af37] transition duration-200">Carrière</a></li>
            <li><a href="#season2025" className="hover:text-[#d4af37] transition duration-200">Saison 2025</a></li>
            <li><a href="#season2026" className="hover:text-[#d4af37] transition duration-200">Saison 2026</a></li>
            <li><a href="#palmares" className="hover:text-[#d4af37] transition duration-200">Palmarès</a></li>
            <li><a href="#press" className="hover:text-[#d4af37] transition duration-200">Presse</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="pt-20">
        <Hero />
        {/* Bandeau sponsors */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[
            { name: "Alpine", url: "https://www.alpinecars.com/", logo: "/sponsors/alpine.png" },
            { name: "Pirelli", url: "https://www.pirelli.com/", logo: "/sponsors/pirelli.png" },
            { name: "TAG Heuer", url: "https://www.tagheuer.com/", logo: "/sponsors/tagheuer.png" },
            { name: "Dior", url: "https://www.dior.com/", logo: "/sponsors/dior.png" },
            { name: "Sephora", url: "https://www.sephora.fr/", logo: "/sponsors/sephora.png" },
            { name: "Louboutin", url: "https://us.christianlouboutin.com/", logo: "/sponsors/louboutin.png" },
            { name: "Naked Wolfe", url: "https://www.nakedwolfe.com/", logo: "/sponsors/nakedwolfe.png" },
          ].map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Profil */}
      <section id="profil" className="py-24 px-8 md:px-32 bg-athena-blue/10 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-athena-gold mb-10">Mieux connaître Séréna Salvini</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-5xl mx-auto text-left">
          {/* Texte */}
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
            <p><strong>Meilleure amie :</strong> Amélia Étienne (<a href="https://instagram.com/ameliatnn" target="_blank" className="text-athena-rose hover:underline">@ameliatnn</a>)</p>
{/* Réseaux sociaux */}
<div className="mt-6 space-y-2 text-center">
  <p>
    <strong>Twitter :</strong>{" "}
    <a
      href="https://twitter.com/Serenaade_"
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

          </motion.div>

          {/* Image */}
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

      {/* Autres sections */}
      <section id="career"><Career /></section>
      <section id="season2025"><Season2025 /></section>
      <section id="season2026"><Season2026 /></section>
      <section id="palmares"><Palmares /></section>
      <section id="press"><PressReleases /></section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-athena-gold bg-athena-black/90">
        <p className="text-athena-gold text-sm mb-4">
          © 2026 Serena Salvini — BWT Alpine F1 Team
        </p>
        <div className="flex justify-center gap-8">
          <a href="https://www.alpinecars.com/" target="_blank" className="hover:text-athena-gold transition">Alpine</a>
          <a href="https://www.pirelli.com/" target="_blank" className="hover:text-athena-gold transition">Pirelli</a>
          <a href="https://www.tagheuer.com/" target="_blank" className="hover:text-athena-gold transition">TAG Heuer</a>
          <a href="https://www.dior.com/" target="_blank" className="hover:text-athena-gold transition">Dior</a>
          <a href="https://www.sephora.fr/" target="_blank" className="hover:text-athena-gold transition">Sephora</a>
          <a href="https://us.christianlouboutin.com/" target="_blank" className="hover:text-athena-gold transition">Louboutin</a>
          <a href="https://www.nakedwolfe.com/" target="_blank" className="hover:text-athena-gold transition">Naked Wolfe</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
