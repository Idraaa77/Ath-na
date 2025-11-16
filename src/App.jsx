import "./index.css";
import Hero from "./Hero";
import Career from "./Career";
import Season2025 from "./Season2025";
import Season2026 from "./Season2026";
import Season2027 from "./Season2027";
import PressReleases from "./PressReleases";
import Palmares from "./Palmares";
import Stats from "./Stats";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";



function App() {
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef(null);

  // Timer pour cacher l'intro après 3,5 secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Débloquer le son au premier clic n'importe où
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch(() => {
            // ignore si le navigateur bloque encore
          });
      }
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);
    return () => window.removeEventListener("click", enableSound);
  }, []);



  return (
    <div className="bg-athena-black text-white min-h-screen">
            <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* FLASH BLANC */}
            <motion.div
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* AUDIO (muted au début) */}
            <audio
              ref={audioRef}
              src="/audio/intro-whoosh.mp3"
              muted
              autoPlay
            />

            <div className="relative w-full max-w-6xl px-6 flex flex-col items-center">
              {/* LOGO RED BULL */}
              <motion.img
                src="/sponsors/redbull.png"
                alt="Red Bull Logo"
                className="w-40 mb-10 opacity-90"
                initial={{ opacity: 0, scale: 0.7, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              />

              {/* LIGNE LUMINEUSE */}
              <motion.div
                className="w-full h-[3px] bg-gradient-to-r from-transparent via-athena-gold/90 to-transparent mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />

 {/* NOM PRINCIPAL */}
<motion.h1
  className="text-5xl md:text-7xl font-extrabold text-athena-gold tracking-wide drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
  initial={{ opacity: 0, y: 40 }}
  animate={{
    opacity: [0, 1, 1, 1],
    y: [40, 0, -2, 0],
    x: [0, 0, -3, 0],
    skewX: [0, 0, 6, 0],
  }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  SERENA SALVINI
</motion.h1>

{/* ATHÉNA // RED BULL RACING — bien centré, espacé */}
<motion.p
  className="mt-5 text-sm md:text-base uppercase tracking-[0.45em] text-athena-rose/90"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.5 }}
>
  ATHÉNA // RED BULL RACING
</motion.p>

{/* TAGLINE */}
<motion.p
  className="mt-6 text-base md:text-xl text-neutral-200 tracking-wide"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.6 }}
>
  Première femme victorieuse en Formule 1 moderne 🏁
</motion.p>

{/* BARRE SOUS LE NOM */}
<motion.div
  className="w-32 md:w-40 h-[3px] mt-6 bg-athena-gold/70 rounded-full"
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ delay: 1.1, duration: 0.5 }}
/>



              {/* TAG EN BAS */}
              <motion.p
                className="absolute bottom-12 text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>




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
