import { motion } from "framer-motion";
import "./index.css";
import Hero from "./Hero";
import Career from "./Career";
import Season2025 from "./Season2025";
import Season2026 from "./Season2026";
import Season2027 from "./Season2027";
import PressReleases from "./PressReleases";
import Palmares from "./Palmares";
import Stats from "./Stats";

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
            <li><a href="#home" className="hover:text-[#d4af37] transition">Accueil</a></li>
            <li><a href="#profil" className="hover:text-[#d4af37] transition">Profil</a></li>
            <li><a href="#career" className="hover:text-[#d4af37] transition">Carrière</a></li>
            <li><a href="#season2025" className="hover:text-[#d4af37] transition">Saison 2025</a></li>
            <li><a href="#season2026" className="hover:text-[#d4af37] transition">Saison 2026</a></li>
            <li><a href="#season2027" className="hover:text-[#d4af37] transition">Saison 2027</a></li>
            <li><a href="#palmares" className="hover:text-[#d4af37] transition">Palmarès</a></li>
            <li><a href="#stats" className="hover:text-[#d4af37] transition">Stats</a></li>
            <li><a href="#press" className="hover:text-[#d4af37] transition">Presse</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="pt-20">
        <Hero />
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
            <p><strong>Âge :</strong> 23 ans</p>
            <p><strong>Équipe :</strong> Oracle Red Bull Racing</p>
            <p><strong>Numéro :</strong> 15</p>
            <p><strong>Date de naissance :</strong> 12 mars 2002</p>
            <p><strong>Lieu de naissance :</strong> Mouscron (Belgique)</p>
            <p><strong>Club de foot préféré :</strong> Olympique de Marseille 💙🤍</p>
            <p><strong>Équipe NBA :</strong> Golden State Warriors 💛💙</p>
            <p><strong>Idole :</strong> Lionel Messi 🐐</p>
            <p><strong>Plat préféré :</strong> Pâtes 🍝</p>
            <p>
              <strong>Meilleure amie :</strong> Amélia Étienne (
              <a
                href="https://instagram.com/ameliatnn"
                target="_blank"
                className="text-athena-rose hover:underline"
              >
                @ameliatnn
              </a>
              )
            </p>
            <p><strong>Twitter :</strong> <a href="https://twitter.com/Serenaade_"target="bland" className="text-athena-rose hover:underline">@Serenaaade_</a></p>
            <p><strong>Instagram :</strong> <a href="https://instagram.com/Serenaaade_" target="_blank" className="text-athena-rose hover:underline">@Serenaaade_</a></p>

            <p className="italic text-athena-rose mt-6">
              « Le sport, c’est plus qu’une passion — c’est mon langage. »
            </p>
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
              alt="Séréna Salvini"
              className="w-full h-full object-cover brightness-110 contrast-110 hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Carrière */}
      <section id="career"><Career /></section>

      {/* Saisons */}
      <section id="season2025"><Season2025 /></section>
      <section id="season2026"><Season2026 /></section>
      <section id="season2027"><Season2027 /></section>

      {/* Palmarès */}
      <section id="palmares"><Palmares /></section>

      {/* Stats */}
      <section id="stats"><Stats /></section>

      {/* Presse */}
      <section id="press"><PressReleases /></section>

      {/* 🌟 Sponsors Officiels */}
      <section className="py-16 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-center border-t border-athena-gold/40">
        <h2 className="text-3xl font-bold text-athena-gold mb-10">Nos Sponsors Officiels</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 px-8 max-w-6xl mx-auto">
          
                    {[
            {
              name: "Oracle Red Bull Racing",
              img: "/sponsors/redbull.png",
              url: "https://www.redbullracing.com/",
            },
            {
              name: "TAG Heuer",
              img: "/sponsors/tagheuer.png",
              url: "https://www.tagheuer.com/",
            },
            {
              name: "Dior",
              img: "/sponsors/dior.png",
              url: "https://www.dior.com/fr_be/fashion/products/M2820OSHJ_M900",
            },
            {
              name: "Sephora",
              img: "/sponsors/sephora.png",
              url: "https://www.sephora.fr/",
            },
            {
              name: "Christian Louboutin",
              img: "/sponsors/louboutin.png",
              url: "https://us.christianlouboutin.com/us_en/so-kate-black-3130694bk01.html",
            },
            {
              name: "Naked Wolfe",
              img: "/sponsors/nakedwolfe.png",
              url: "https://www.nakedwolfe.com/products/spice-black-stretch",
            },
            {
              name: "Victoria’s Secret",
              img: "/sponsors/victoriasecret.png",
              url: "https://www.victoriassecret.com/",
            },
].map((sponsor, i) => {
  const isDarkLogo = ["Dior", "Sephora"].includes(sponsor.name);

  return (
    <motion.a
      key={i}
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center hover:scale-110 transition-transform duration-500"
      whileHover={{ scale: 1.12 }}
    >
      <img
        src={sponsor.img}
        alt={sponsor.name}
        className={`
          w-32 h-32 object-contain mb-3
          opacity-100
          drop-shadow-[0_0_12px_rgba(255,215,0,0.35)]
          hover:drop-shadow-[0_0_18px_rgba(255,215,0,0.65)]
          transition-all duration-300
          ${isDarkLogo ? "bg-white/90 p-3 rounded-xl" : ""}
        `}
      />
      <p className="text-athena-gold font-semibold text-sm">{sponsor.name}</p>
    </motion.a>
  );
})}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-athena-gold bg-athena-black/90">
        <p className="text-athena-gold text-sm">
          © 2026 Serena Salvini — Tous droits réservés — Inspiré par la passion et la vitesse ⚡
        </p>
      </footer>
    </div>
  );
}

export default App;
