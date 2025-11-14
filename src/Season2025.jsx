import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Season2025 = () => {
  const [selectedGP, setSelectedGP] = useState(null);

  // ===== CALENDRIER DES COURSES =====
  const calendar = [
    {
      gp: "Australie",
      flag: "🇦🇺",
      qualif: "P5",
      course: "P5",
      resume:
        "Un début solide pour Serena Salvini — calme, vitesse et maturité pour sa première course F1.",
    },
    {
      gp: "Chine",
      flag: "🇨🇳",
      qualif: "P10",
      course: "P6",
      resume:
        "Après une Sprint difficile, elle rebondit avec une performance constante, des points importants pour Alpine.",
    },
    {
      gp: "Japon",
      flag: "🇯🇵",
      qualif: "P11",
      course: "P8",
      resume:
        "Une course propre à Suzuka : gestion stratégique, belle gestion des pneus et rythme de course régulier.",
    },
    {
      gp: "Bahreïn",
      flag: "🇧🇭",
      qualif: "P8",
      course: "P4",
      resume: "Une performance solide, proche du podium.",
    },
    {
      gp: "Jeddah",
      flag: "🇸🇦",
      qualif: "P10",
      course: "DNF",
      resume:
        "Une course écourtée suite à un accident, mais de bons signes de compétitivité.",
    },
    {
      gp: "Miami",
      flag: "🇺🇸",
      qualif: "P4",
      course: "DNF",
      resume:
        "Week-end contrasté : brillante qualification mais abandon sous la pluie en course.",
    },
    {
      gp: "Imola",
      flag: "🇮🇹",
      qualif: "P8",
      course: "P11",
      resume:
        "Course difficile à domicile, Alpine en manque de rythme, mais une course propre.",
    },
    {
      gp: "Monaco",
      flag: "🇲🇨",
      qualif: "P3",
      course: "P2",
      resume:
        "Premier podium historique sous la pluie — un moment de légende.",
    },
    {
      gp: "Espagne",
      flag: "🇪🇸",
      qualif: "P10",
      course: "P11",
      resume:
        "Une course compliquée, Alpine manque de rythme dans la chaleur catalane.",
    },
    {
      gp: "Canada",
      flag: "🇨🇦",
      qualif: "P7",
      course: "P3",
      resume:
        "Deuxième podium de la saison après une course intelligente et régulière.",
    },
    {
      gp: "Autriche",
      flag: "🇦🇹",
      qualif: "P12",
      course: "P16",
      resume: "Week-end à oublier, Alpine en difficulté.",
    },
    {
      gp: "Silverstone",
      flag: "🇬🇧",
      qualif: "P18",
      course: "DNF",
      resume: "Nouvelle casse moteur, un coup dur.",
    },
    {
      gp: "Belgique",
      flag: "🇧🇪",
      qualif: "P8",
      course: "P3",
      resume: "Podium à Spa, course sous la pluie parfaitement gérée.",
    },
    {
      gp: "Hongrie",
      flag: "🇭🇺",
      qualif: "P14",
      course: "P18",
      resume: "Course difficile sans rythme.",
    },
    {
      gp: "Pays-Bas",
      flag: "🇳🇱",
      qualif: "P7",
      course: "P9",
      resume: "Petits points mais un rythme encourageant.",
    },
    {
      gp: "Monza",
      flag: "🇮🇹",
      qualif: "P10",
      course: "DNF",
      resume:
        "Crevaison en fin de course, immense déception à domicile alors qu’un gros résultat se profilait.",
    },
    {
      gp: "Bakou",
      flag: "🇦🇿",
      qualif: "P9",
      course: "P6",
      resume:
        "Course propre, stratégie payante et bons points marqués dans les rues de Bakou.",
    },
    {
      gp: "Singapour",
      flag: "🇸🇬",
      qualif: "P7",
      course: "P2",
      resume:
        "Course magique sous les lumières, quatrième podium de la saison.",
    },
    {
      gp: "Austin",
      flag: "🇺🇸",
      qualif: "P12",
      course: "P7",
      resume: "Course solide au Texas, bonne gestion du rythme et des pneus.",
    },
    {
      gp: "Mexique",
      flag: "🇲🇽",
      qualif: "P9",
      course: "P20",
      resume:
        "Problème mécanique en course, week-end frustrant malgré une bonne qualification.",
    },
    {
      gp: "Brésil",
      flag: "🇧🇷",
      qualif: "P10",
      course: "P6",
      resume: "Belle course et stratégie réussie à Interlagos.",
    },
    {
      gp: "Las Vegas",
      flag: "🇺🇸",
      qualif: "P11",
      course: "P1",
      resume:
        "Première victoire en F1 sous les néons du Strip, au terme d’une course stratégique parfaite.",
    },
    {
      gp: "Qatar",
      flag: "🇶🇦",
      qualif: "P10",
      course: "P4",
      resume: "Très bon rythme, proche du podium.",
    },
    {
      gp: "Abu Dhabi",
      flag: "🇦🇪",
      qualif: "P6",
      course: "DNF",
      resume:
        "Dernière course marquée par une casse mécanique, mais une saison déjà historique.",
    },
  ];

  // ===== MOMENTS FORTS =====
  const moments = [
    {
      key: "monaco",
      title: "Podium à Monaco 🇲🇨",
      quote:
        "2e place sous la pluie — le premier podium de sa carrière, une révélation.",
      halo: "shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]",
    },
    {
      key: "canada",
      title: "Podium au Canada 🇨🇦",
      quote:
        "Sous la tension du dernier virage, elle s’offre un deuxième podium.",
      halo: "shadow-[0_0_20px_4px_rgba(0,191,255,0.5)]",
    },
    {
      key: "belgique",
      title: "Podium en Belgique 🇧🇪",
      quote:
        "Course mythique à Spa sous la pluie, un nouveau podium historique.",
      halo: "shadow-[0_0_20px_4px_rgba(255,215,0,0.5)]",
    },
    {
      key: "singapour",
      title: "Podium à Singapour 🇸🇬",
      quote:
        "Sous les lumières de Marina Bay, Serena signe une course d’orfèvre.",
      halo: "shadow-[0_0_20px_4px_rgba(255,105,180,0.5)]",
    },
    {
      key: "vegas",
      title: "Victoire à Las Vegas 🇺🇸",
      quote:
        "Première victoire de sa carrière, première d’une femme en F1 moderne.",
      halo: "shadow-[0_0_25px_6px_rgba(0,255,255,0.7)]",
    },
  ];

  // ===== PODIUMS IMAGES PAR MOMENT =====
  const podiumImages = {
    monaco: {
      bg: "/moments2025/1.jpg",
      p1: "/podiums2025/monaco_p1.png",
      p2: "/podiums2025/monaco_p2.png",
      p3: "/podiums2025/monaco_p3.png",
    },
    canada: {
      bg: "/moments2025/2.jpg",
      p1: "/podiums2025/canada_p1.png",
      p2: "/podiums2025/canada_p2.png",
      p3: "/podiums2025/canada_p3.png",
    },
    belgique: {
      bg: "/moments2025/3.jpg",
      p1: "/podiums2025/belgique_p1.png",
      p2: "/podiums2025/belgique_p2.png",
      p3: "/podiums2025/belgique_p3.png",
    },
    singapour: {
      bg: "/moments2025/4.jpg",
      p1: "/podiums2025/singapour_p1.png",
      p2: "/podiums2025/singapour_p2.png",
      p3: "/podiums2025/singapour_p3.png",
    },
    vegas: {
      bg: "/moments2025/5.jpg",
      p1: "/podiums2025/vegas_p1.png",
      p2: "/podiums2025/vegas_p2.png",
      p3: "/podiums2025/vegas_p3.png",
    },
  };

  return (
    <section id="saison2025" className="bg-athena-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITRE */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-athena-gold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🏁 Saison 2025 : L’éveil d’Athéna
        </motion.h2>

        {/* MOMENTS FORTS */}
        <div className="space-y-10">
          {moments.map((moment, idx) => {
            const imgs = podiumImages[moment.key];
            return (
              <motion.div
                key={moment.key}
                className="relative overflow-hidden rounded-3xl border border-athena-gold/40 bg-black/60"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Image de fond */}
                <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
                  <img
                    src={imgs.bg}
                    alt={moment.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

                  {/* Texte + podiums */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-athena-gold mb-2">
                        {moment.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-100 max-w-3xl">
                        {moment.quote}
                      </p>
                    </div>

                    <div className="flex justify-center sm:justify-end gap-6 mt-4">
                      {/* P1 */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-400/80 border-4 border-yellow-300 flex items-center justify-center ${moment.halo}`}
                        >
                          <img
                            src={imgs.p1}
                            alt="P1"
                            className="w-[72%] h-[72%] rounded-full object-cover"
                          />
                        </div>
                        <span className="mt-2 text-sm font-semibold text-yellow-300">
                          P1
                        </span>
                      </div>
                      {/* P2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200/90 border-4 border-gray-100 flex items-center justify-center">
                          <img
                            src={imgs.p2}
                            alt="P2"
                            className="w-[72%] h-[72%] rounded-full object-cover"
                          />
                        </div>
                        <span className="mt-2 text-sm font-semibold text-gray-100">
                          P2
                        </span>
                      </div>
                      {/* P3 */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/90 border-4 border-orange-300 flex items-center justify-center">
                          <img
                            src={imgs.p3}
                            alt="P3"
                            className="w-[72%] h-[72%] rounded-full object-cover"
                          />
                        </div>
                        <span className="mt-2 text-sm font-semibold text-orange-300">
                          P3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

{/* RÉSULTATS / CLASSEMENT / STATS 2025 */}
<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Résultats */}
  <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
    <img
      src="/saison2025/resultats.png"
      alt="Résultats 2025"
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="px-4 py-3 text-center text-sm text-gray-200">
      Résultats 2025
    </div>
  </div>

  {/* Classement */}
  <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
    <img
      src="/saison2025/classement.png"
      alt="Classement 2025"
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="px-4 py-3 text-center text-sm text-gray-200">
      Classement 2025
    </div>
  </div>

  {/* Stats */}
  <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
    <img
      src="/saison2025/stats.png"
      alt="Stats 2025"
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="px-4 py-3 text-center text-sm text-gray-200">
      Stats 2025
    </div>
  </div>
</div>


        {/* RÉSUMÉ */}
        <div className="mt-16 bg-black/50 border border-athena-gold/30 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-athena-gold mb-6 flex items-center gap-2">
            📖 Résumé de la Saison 2025
          </h3>

          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>
              C’était une saison que personne n’oubliera. Celle où une rookie
              italienne a changé le visage de la Formule 1. Dès le premier
              week-end à{" "}
              <span className="text-athena-gold">Melbourne</span>, Serena
              Salvini s’est imposée comme une révélation. P5 en qualifications,
              P5 en course — la jeune pilote Alpine a immédiatement prouvé
              qu’elle n’était pas là pour apprendre, mais pour se battre.
            </p>

            <p>
              En <span className="text-athena-gold">Chine</span> et au{" "}
              <span className="text-athena-gold">Japon</span>, elle a confirmé
              sa régularité avant un coup d’éclat à
              <span className="text-athena-gold"> Bahreïn (P4)</span>. Malgré
              des abandons à Jeddah et Miami,{" "}
              <span className="text-athena-gold">Monaco</span> restera le déclic
              : sous la pluie, elle signe un podium historique — le premier
              d’une femme depuis des décennies.
            </p>

            <p>
              Après <span className="text-athena-gold">Montréal</span>,{" "}
              <span className="text-athena-gold">Spa</span> et{" "}
              <span className="text-athena-gold">Singapour</span>, elle atteint
              l’apothéose à
              <span className="text-athena-gold"> Las Vegas</span> : première
              victoire de sa carrière, première victoire d’une femme en F1
              moderne. Sous les lumières du Strip, Athéna triomphe.
            </p>

            <p>
              Avec{" "}
              <span className="text-athena-gold font-semibold">5 podiums</span>
              ,{" "}
              <span className="text-athena-gold font-semibold">1 victoire</span>{" "}
              et
              <span className="text-athena-gold font-semibold">
                {" "}
                172 points
              </span>
              , Serena Salvini conclut sa saison rookie à la 6ᵉ place du
              championnat. Une performance légendaire qui dépasse les chiffres.
            </p>

            <p className="text-right italic text-athena-gold/80 mt-8">
              « Elle n’a pas seulement marqué des points. Elle a marqué une
              génération. » — F1 Chronicle, 2025
            </p>
          </div>
        </div>

        {/* CALENDRIER & POPUPS */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
            📅 Calendrier & Résultats 2025
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calendar.map((item, index) => (
              <motion.button
                key={item.gp}
                onClick={() => setSelectedGP(item)}
                className="bg-black/60 border border-athena-gold/30 rounded-xl px-4 py-3 text-left hover:bg-athena-blue/40 hover:shadow-lg transition flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <div>
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span>{item.flag}</span>
                    <span>{item.gp}</span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Qualification :{" "}
                    <span className="text-athena-rose font-semibold">
                      {item.qualif}
                    </span>
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Course :</span>
                  <span
                    className={`text-sm font-bold ${
                      item.course === "P1"
                        ? "text-yellow-400"
                        : item.course === "P2"
                        ? "text-gray-100"
                        : item.course === "P3"
                        ? "text-orange-400"
                        : item.course === "DNF"
                        ? "text-red-500"
                        : "text-athena-rose"
                    }`}
                  >
                    {item.course}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP GP */}
      <AnimatePresence>
        {selectedGP && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/90 border border-athena-gold/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedGP(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              <h4 className="text-2xl font-bold text-athena-gold mb-2 flex items-center gap-2">
                <span>{selectedGP.flag}</span>
                <span>{selectedGP.gp} 2025</span>
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Qualification :{" "}
                <span className="text-athena-rose font-semibold">
                  {selectedGP.qualif}
                </span>{" "}
                • Course :{" "}
                <span
                  className={`font-semibold ${
                    selectedGP.course === "P1"
                      ? "text-yellow-400"
                      : selectedGP.course === "P2"
                      ? "text-gray-100"
                      : selectedGP.course === "P3"
                      ? "text-orange-400"
                      : selectedGP.course === "DNF"
                      ? "text-red-500"
                      : "text-athena-rose"
                  }`}
                >
                  {selectedGP.course}
                </span>
              </p>
              <p className="text-gray-100 leading-relaxed">
                {selectedGP.resume}
              </p>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedGP(null)}
                  className="inline-flex items-center px-5 py-2 rounded-full bg-athena-gold text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Season2025;
