import React from "react";
import { motion } from "framer-motion";

const Career = () => {
  return (
    <section className="py-20 bg-athena-blue/10 text-white text-center">
      <h2 className="text-4xl font-bold text-athena-gold mb-12">
        🏎️ Carrière — L’Odyssée d’Athéna
      </h2>

      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-athena-black/60 border border-athena-gold p-8 rounded-xl shadow-xl hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-2 text-athena-gold">
            2025 — Saison Rookie
          </h3>
          <p className="text-gray-300 mb-4">
            Première femme de l’histoire moderne de la F1 à marquer des points,
            monter sur le podium et remporter une victoire.
          </p>
          <a
            href="#season2025"
            className="text-athena-rose hover:text-athena-gold transition underline"
          >
            Voir la saison
          </a>
        </div>

        <div className="bg-athena-black/60 border border-athena-gold p-8 rounded-xl shadow-xl hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-2 text-athena-gold">
            2026 — La Confirmation
          </h3>
          <p className="text-gray-300 mb-4">
            Toujours chez Alpine, mais désormais en tant que leader confirmé. Une
            saison plus mature, régulière et stratégique.
          </p>
          <a
            href="#season2026"
            className="text-athena-rose hover:text-athena-gold transition underline"
          >
            Voir la saison
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Career;
