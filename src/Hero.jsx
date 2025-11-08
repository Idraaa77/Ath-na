import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image de fond */}
      <motion.img
        src="/galerie/portrait1.jpg"
        alt="Serena Salvini"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeOut" }}
      />

      {/* Dégradé sombre */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-athena-gold mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Serena Salvini
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl italic text-athena-rose mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Première femme victorieuse en Formule&nbsp;1 moderne 🏁
        </motion.p>

        {/* LOGOS SPONSORS */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <img
            src="/sponsors/bwt.png"
            alt="BWT Alpine"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/pirelli.png"
            alt="Pirelli"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/tagheuer.png"
            alt="TAG Heuer"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/dior.png"
            alt="Dior"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/sephora.png"
            alt="Sephora"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/louboutin.png"
            alt="Louboutin"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
          <img
            src="/sponsors/nakedwolfe.png"
            alt="Naked Wolfe"
            className="h-10 md:h-12 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
