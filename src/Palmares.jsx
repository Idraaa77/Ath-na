import React from "react";
import { motion } from "framer-motion";

const Palmares = () => {
  return (
    <section
      id="palmares"
      className="relative min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Image d’arrière-plan */}
      <div className="absolute inset-0">
        <img
          src="/galerie/karting-serena.jpg"
          alt="Séréna Salvini Karting"
          className="w-full h-full object-cover opacity-80 brightness-110 contrast-110 saturate-125"
          onError={(e) => (e.target.style.display = 'none')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-bold text-[#d4af37] mb-10 text-center z-10"
      >
        🏆 Palmarès de <span className="text-[#f5d88c]">Séréna Salvini</span>
      </motion.h1>

      {/* Section Avant F1 */}
      <section className="py-24 px-8 md:px-32 bg-athena-black text-center relative overflow-hidden z-10">
        <h2 className="text-4xl font-bold text-athena-gold mb-16">
          🏆 Avant la F1 — Les Origines d’Athéna
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-6xl mx-auto text-left">
          
          {/* Texte à gauche */}
          <motion.div
            className="flex-1 bg-athena-black/70 border border-athena-gold rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Avant de devenir l’espoir féminin de la Formule&nbsp;1, <span className="text-athena-rose">Séréna Salvini</span> a tout gagné sur son passage.
              Des circuits de karting européens aux séries de monoplace, elle a bâti une réputation de prodige : rapide, calme et impitoyable.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              En quelques années, elle est devenue la référence absolue des catégories jeunes, remportant tous les championnats qu’elle a disputés.  
              Le monde du sport mécanique savait déjà qu’un phénomène était né.
            </p>

            <ul className="list-disc list-inside text-athena-gold space-y-1 mt-6">
              <li>🥇 Coupe du Monde Junior de Karting CIK-FIA — 2017 / 2018 / 2019</li>
              <li>🥇 World Karting Championship (WKC) — 2017 / 2018 / 2019</li>
              <li>🥇 World Karting Championship Female (WKCF) — 2017 / 2018 / 2019</li>
              <li>🏁 F4 Régionale France & Féminine — 2020</li>
              <li>🏁 F4 France Championship & Female — 2020</li>
              <li>🥇 F4 World Series — 2020</li>
              <li>🥇 F3 World Series — 2021</li>
              <li>🥇 F2 World Series — 2022</li>
              <li>🥇 F1 Academy — 2023 & 2024</li>
            </ul>

            <p className="italic text-athena-rose mt-6 text-lg">
              « Elle n’a jamais couru pour prouver qu’une femme pouvait gagner.  
              Elle a simplement couru pour gagner. »
            </p>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            className="flex-1 max-w-sm rounded-2xl overflow-hidden border-2 border-athena-gold shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/galerie/karting-serena.jpg"
              alt="Séréna Salvini Karting"
              className="w-full h-full object-cover brightness-110 contrast-110 hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* Citation finale */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative mt-16 italic text-[#f5d88c]/80 text-center text-lg max-w-3xl z-10"
      >
        « Chaque étape avant la F1 a forgé l’Athéna que le monde connaît aujourd’hui. »
      </motion.p>
    </section>
  );
};

export default Palmares;
