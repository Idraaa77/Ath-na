import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Serena Salvini — La pluie, la grâce et la victoire",
    date: "26 mai 2025",
    source: "The Race",
    excerpt:
      "Sous la pluie de Monaco, une jeune femme a transformé la peur en symphonie. Serena Salvini n’a pas seulement résisté : elle a redéfini la notion même de contrôle.",
    image: "/press/monaco2025.jpg",
  },
  {
    title: "Vegas 2025 — L’histoire s’écrit en or",
    date: "17 novembre 2025",
    source: "L'Équipe",
    excerpt:
      "Sous les lumières de Las Vegas, Athéna a pris le monde à témoin. La première victoire féminine de l’histoire moderne de la F1. Une page d’histoire dorée à l’or rose.",
    image: "/press/vegas2025.jpg",
  },
  {
    title: "Athéna : la révolution a un visage",
    date: "Décembre 2025",
    source: "Autosport",
    excerpt:
      "Salvini n’est pas une exception : elle est le commencement. Sa victoire est un symbole, sa constance une leçon. La F1 a changé, et elle porte désormais un prénom italien.",
    image: "/press/portrait2025.jpg",
  },
  {
    title: "Serena Salvini x Dior — Quand la vitesse devient couture",
    date: "Février 2026",
    source: "Vogue Paris",
    excerpt:
      "Entre podium et podium, Serena collabore avec Dior pour créer une collection exclusive : lignes pures, matériaux techniques, féminité assumée. L’Athéna Couture est née.",
    image: "/press/dior2026.jpg",
  },
  {
    title: "La rivalité Salvini–Leclerc — Étincelles à venir ?",
    date: "Mars 2026",
    source: "Formula Passion",
    excerpt:
      "Deux talents italiens, deux philosophies. L’un a grandi dans la tradition, l’autre dans la révolte. Quand les feux rouges s’éteignent, il ne reste que la vérité de la piste.",
    image: "/press/duel2026.jpg",
  },
];

const PressReleases = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* EN-TÊTE */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-athena-gold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📰 La Légende Athéna — Dans la presse
        </motion.h2>
        <p className="text-athena-rose italic text-lg">
          “Ce n’est plus une histoire de genre. C’est une histoire de vitesse.”
        </p>
      </div>

      {/* ARTICLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-athena-gold/30 hover:shadow-athena-gold/40 transition-all duration-500 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="h-64 w-full overflow-hidden">
              <motion.img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
            </div>

            {/* TEXTE */}
            <div className="p-6 bg-black/70 backdrop-blur-sm">
              <p className="text-xs uppercase text-athena-rose mb-2">
                {article.source} — {article.date}
              </p>
              <h3 className="text-xl font-semibold text-athena-gold mb-3">
                {article.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* SURVOL */}
            <motion.div
              className="absolute inset-0 bg-athena-gold/0 group-hover:bg-athena-gold/5 transition-all duration-700"
              initial={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Citation finale */}
      <div className="text-center mt-20">
        <motion.p
          className="italic text-athena-rose text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          “Athéna n’écrit pas des communiqués. Elle réécrit l’histoire.” — F1
          Chronicle
        </motion.p>
      </div>
    </section>
  );
};

export default PressReleases;
