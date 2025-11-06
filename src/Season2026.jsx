import { motion } from "framer-motion";

export default function Season2026() {
  const moments = [
    {
      title: "Imola — Contact avec Verstappen",
      quote: "« Ils peuvent me briser l’aileron, pas la volonté. »",
    },
    {
      title: "Autriche inversé — Victoire symbole",
      quote: "« J’ai gagné avec la rage, pas avec le moteur. »",
    },
    {
      title: "Pays-Bas inversé — De la 21e à la 1ère place",
      quote: "« C’était plus qu’une course, c’était une révolte. »",
    },
    {
      title: "Singapour — Revanche totale",
      quote: "« J’ai transformé leur pénalité en podium. »",
    },
  ];

  const stats = [
    { label: "🏆 Victoires", value: 5 },
    { label: "🥇 Podiums", value: 13 },
    { label: "⚡ Pôles", value: 4 },
    { label: "🏁 Points", value: 411 },
  ];

  return (
    <section id="season2026" className="py-24 px-8 bg-athena-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <motion.h2
          className="text-4xl font-bold text-athena-gold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ⚡ Saison 2026 — La Guerre contre la FIA
        </motion.h2>

        <motion.p
          className="text-center italic text-athena-rose mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          « Plus qu’une pilote, une révolution. » — BBC Sport, 2026
        </motion.p>

        {/* Timeline */}
        <div className="space-y-12">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-athena-gold pl-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-athena-gold">{moment.title}</h3>
              <p className="italic text-athena-rose mt-2">{moment.quote}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistiques globales */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-athena-blue/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-athena-gold">{stat.value}</h3>
              <p className="text-sm mt-2 text-athena-rose">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Galerie d’images */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src="/classement2026.png" alt="Classement Pilotes 2026" />
            <p className="text-center text-sm text-athena-gold mt-2">Classement Pilotes 2026</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src="/resultats2026.png" alt="Résultats de la saison 2026" />
            <p className="text-center text-sm text-athena-gold mt-2">Résultats de la saison</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src="/stats2026.png" alt="Statistiques 2026" />
            <p className="text-center text-sm text-athena-gold mt-2">Statistiques du pilote</p>
          </div>
        </motion.div>

        {/* Citation finale */}
        <motion.div
          className="mt-16 text-center text-athena-blue italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          « Ils peuvent me briser l’aileron, pas la volonté. »
          <br /> — <span className="text-athena-gold">Serena Salvini, Singapour 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
