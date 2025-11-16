import React from "react";
import { motion } from "framer-motion";

// Timeline globale de carrière
const careerTimeline = [
  {
    period: "2017 - 2019",
    title: "Domination mondiale en karting",
    detail:
      "Triplé Coupe du Monde Junior CIK-FIA + WKC + WKCF pendant trois saisons consécutives.",
  },
  {
    period: "2020",
    title: "Passage en F4",
    detail:
      "Titres en F4 Régionale France & Féminine, F4 France Championship & Female, et F4 World Series.",
  },
  {
    period: "2021",
    title: "Couronne en F3 & Rallye",
    detail:
      "Titre en F3 World Series et sacre en FIA World Rally Championship.",
  },
  {
    period: "2019 - 2020",
    title: "Endurance mondiale",
    detail:
      "FIA World Endurance Championship (WEC) championne deux années de suite, avec un triplé historique des trois voitures.",
  },
  {
    period: "2022",
    title: "NASCAR Cup Series",
    detail:
      "Championne NASCAR Cup Series, première femme titrée dans la catégorie reine du stock-car.",
  },
  {
    period: "2023 - 2024",
    title: "Légende de l’Endurance & de l’Indy",
    detail:
      "Victoires aux 24 Heures du Mans, aux 500 Miles d’Indianapolis et au Daytona 500 en 2023 & 2024.",
  },
  {
    period: "2023 - 2024",
    title: "F1 Academy",
    detail:
      "Titre F1 Academy deux années d’affilée, ultime marche avant la Formule 1.",
  },
  {
    period: "2025 →",
    title: "Formule 1",
    detail:
      "Débuts en Formule 1 avec Athéna, nouvelle ère pour le sport auto féminin.",
  },
];

// Palmarès F1
const f1Palmares = [
  {
    season: "2025",
    team: "Équipe Athéna F1",
    title: "Rookie de l’année",
    details:
      "Première saison en F1, points réguliers, plusieurs Q3, podium historique au Grand Prix d’Italie.",
  },
  {
    season: "2026",
    team: "Équipe Athéna F1",
    title: "Candidate au titre",
    details:
      "Multiples victoires, bataille au championnat pilotes jusqu’à la dernière manche.",
  },
];

const Palmares = () => {
  return (
    <section
      id="palmares"
      className="relative bg-[#050505] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10 overflow-x-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/galerie/karting-serena.jpg"
          alt="Séréna Salvini Karting"
          className="w-full h-full object-cover opacity-60 brightness-110 contrast-110 saturate-125"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4af37] text-center"
        >
          🏆 Palmarès de{" "}
          <span className="text-[#f5d88c]">Séréna Salvini</span>
        </motion.h1>

        {/* AVANT F1 */}
        <div className="bg-black/70 border border-athena-gold/60 rounded-3xl shadow-2xl p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-athena-gold mb-8 text-center">
            🏆 Avant la F1 — Les Origines d’Athéna
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Texte */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                Avant de devenir l’espoir féminin de la Formule&nbsp;1,{" "}
                <span className="text-athena-rose">Séréna Salvini</span> a tout
                gagné sur son passage. Des circuits de karting européens aux
                séries de monoplace, elle a bâti une réputation de prodige :
                rapide, calme et impitoyable.
              </p>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                En quelques années, elle est devenue la référence absolue des
                catégories jeunes, remportant tous les championnats qu’elle a
                disputés. Le monde du sport mécanique savait déjà qu’un
                phénomène était né.
              </p>

              {/* Palmarès jeunes */}
              <h3 className="text-xl font-bold text-athena-rose mt-6 mb-3">
                🏎️ Palmarès en karting & monoplace junior
              </h3>
              <ul className="list-disc list-inside text-athena-gold space-y-1 text-sm sm:text-base">
                <li>
                  🥇 Coupe du Monde Junior de Karting CIK-FIA — 2017 / 2018 /
                  2019
                </li>
                <li>
                  🥇 World Karting Championship (WKC) — 2017 / 2018 / 2019
                </li>
                <li>
                  🥇 World Karting Championship Female (WKCF) — 2017 / 2018 /
                  2019
                </li>
                <li>🏁 F4 Régionale France & Féminine — 2020</li>
                <li>🏁 F4 France Championship & Female — 2020</li>
                <li>🥇 F4 World Series — 2020</li>
                <li>🥇 F3 World Series — 2021</li>
                <li>🥇 F2 World Series — 2022</li>
                <li>🥇 F1 Academy — 2023 & 2024</li>
              </ul>

              {/* Palmarès international */}
              <h3 className="text-xl font-bold text-athena-rose mt-8 mb-3">
                🌍 Palmarès International — Endurance, IndyCar, NASCAR & Rallye
              </h3>
              <ul className="list-disc list-inside text-athena-gold space-y-1 text-sm sm:text-base">
                <li>🏆 24 Heures du Mans — Vainqueur : 2023 & 2024</li>
                <li>🏆 500 Miles d’Indianapolis — Vainqueur : 2023 & 2024</li>
                <li>🏆 Daytona 500 — Vainqueur : 2023 & 2024</li>
                <li>🏆 NASCAR Cup Series — Championne : 2022</li>
                <li>
                  🏆 FIA World Rally Championship (WRC) — Championne : 2021
                </li>
                <li>
                  🏆 FIA World Endurance Championship (WEC) — Championne :
                  2019, 2020
                  <br />
                  <span className="text-athena-rose text-xs sm:text-sm">
                    Avec les 3 voitures engagées (triplé historique)
                  </span>
                </li>
              </ul>

              <p className="italic text-athena-rose mt-6 text-sm sm:text-lg">
                « Elle n’a jamais couru pour prouver qu’une femme pouvait
                gagner. Elle a simplement couru pour gagner. »
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex-1 max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-athena-gold shadow-[0_0_40px_rgba(255,215,0,0.3)]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/galerie/karting-serena.jpg"
                alt="Séréna Salvini Karting"
                className="w-full h-full object-cover brightness-110 contrast-110"
              />
            </motion.div>
          </div>
        </div>

        {/* TIMELINE CARRIÈRE */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-athena-gold text-left">
            🕒 Chronologie de carrière
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 text-left max-w-2xl">
            De la naissance d’Athéna en karting jusqu’à la Formule&nbsp;1 : une
            progression sans pause.
          </p>

          <div className="-mx-4 px-4 flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-athena-gold/60 scrollbar-track-black/40 snap-x snap-mandatory">
            {careerTimeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="snap-start min-w-[240px] sm:min-w-[260px] bg-athena-black/80 border border-athena-gold/60 rounded-2xl p-4 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-athena-rose mb-1">
                  {step.period}
                </p>
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-athena-gold">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION F1 */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-athena-gold text-left">
            🏁 Formule 1 — Ère Athéna
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 text-left max-w-2xl">
            Les saisons qui définissent l’entrée de Séréna Salvini dans la
            légende de la F1.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {f1Palmares.map((season, index) => (
              <motion.article
                key={season.season}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-athena-black/70 border border-athena-gold/70 rounded-2xl p-5 sm:p-6 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-athena-rose mb-1">
                  Saison {season.season}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-athena-gold">
                  {season.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 mb-2">
                  {season.team}
                </p>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {season.details}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Citation finale */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="italic text-[#f5d88c]/80 text-center text-sm sm:text-lg max-w-3xl mx-auto"
        >
          « Chaque étape avant la F1 a forgé l’Athéna que le monde connaît
          aujourd’hui. »
        </motion.p>
      </div>
    </section>
  );
};

export default Palmares;
