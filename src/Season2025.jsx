import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Season2025 = () => {
  const [selectedGP, setSelectedGP] = useState(null);
  const stats2025 = [
    { label: "Équipe", value: "BWT Alpine F1 Team", teamColor: "alpine" },
    { label: "🏆 Victoires", value: "1" },
    { label: "🥇 Podiums", value: "5" },
    { label: "⚡ Poles", value: "0" },
    { label: "🏁 Points", value: "172" },
    { label: "🏆 Place au championnat", value: "P6" },
  ];

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

   // ===== MOMENTS FORTS 2025 (nouveau format) =====
  const moments2025 = [
    {
      key: "monaco",
      gpName: "Grand Prix de Monaco",
      title: "Premier podium à Monaco 🇲🇨",
      subtitle: "Sous la pluie, dans les rues de Monte-Carlo.",
      quali: "P3",
      course: "P2",
      description:
        "Sous la pluie monégasque, Séréna signe le premier podium de sa carrière F1. Une course de survie transformée en démonstration de contrôle.",
      bg: "/moments2025/1.jpg",
    },
    {
      key: "canada",
      gpName: "Grand Prix du Canada",
      title: "Confirmation à Montréal 🇨🇦",
      subtitle: "Deuxième podium de la saison.",
      quali: "P7",
      course: "P3",
      description:
        "À Montréal, elle confirme que Monaco n’était pas un accident : gestion parfaite du rythme et des pneus pour sécuriser un nouveau podium.",
      bg: "/moments2025/2.jpg",
    },
    {
      key: "belgique",
      gpName: "Grand Prix de Belgique",
      title: "Podium à Spa sous la pluie 🇧🇪",
      subtitle: "L’Eau Rouge, la pluie, et Athéna devant.",
      quali: "P8",
      course: "P3",
      description:
        "Spa-Francorchamps, piste trempée : Séréna apprivoise l’Eau Rouge et s’offre un nouveau podium dans des conditions extrêmes.",
      bg: "/moments2025/3.jpg",
    },
    {
      key: "singapour",
      gpName: "Grand Prix de Singapour",
      title: "Nuit de feu à Singapour 🇸🇬",
      subtitle: "Podium au bout d’un marathon urbain.",
      quali: "P7",
      course: "P2",
      description:
        "Sous les lumières de Marina Bay, elle enchaîne les tours qualifs en course et remonte jusqu’à la deuxième place.",
      bg: "/moments2025/4.jpg",
    },
    {
      key: "vegas",
      gpName: "Grand Prix de Las Vegas",
      title: "Première victoire à Las Vegas 🇺🇸",
      subtitle: "Première victoire de sa carrière, première d’une femme en F1 moderne.",
      quali: "P11",
      course: "P1",
      description:
        "Dans la nuit de Vegas, Séréna décroche sa première victoire. Une stratégie parfaite et des dépassements chirurgicaux la portent au sommet.",
      bg: "/moments2025/5.jpg",
    },
  ];


  const getCourseColor = (course) => {
    if (course === "P1") return "text-yellow-400";
    if (course === "P2") return "text-gray-100";
    if (course === "P3") return "text-orange-400";
    if (course === "DNF") return "text-red-500";
    return "text-athena-rose";
  };

  return (
    <section id="season2025" className="bg-athena-black text-white py-20">
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
               <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {stats2025.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl px-6 py-4 text-center shadow-md bg-black/80 border ${
                s.teamColor === "alpine"
                  ? "border-[#FF73C5]"
                  : s.teamColor === "redbull"
                  ? "border-red-500"
                  : "border-athena-gold/40"
              }`}
            >
              <p
                className={`text-2xl font-bold ${
                  s.teamColor === "alpine"
                    ? "text-[#FF73C5]"
                    : s.teamColor === "redbull"
                    ? "text-red-400"
                    : "text-athena-gold"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-1 text-xs ${
                  s.teamColor === "alpine"
                    ? "text-[#FF73C5]/80"
                    : s.teamColor === "redbull"
                    ? "text-red-300/80"
                    : "text-athena-rose"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>


               {/* MOMENTS FORTS 2025 (nouveau style) */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-athena-gold mb-4">
            🌟 Moments forts de la saison 2025
          </h3>
          <p className="text-sm text-neutral-300 mb-4">
            Les temps forts de la saison rookie de Séréna Salvini en Formule 1.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {moments2025.map((m, index) => (
              <motion.article
                key={m.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-athena-gold/40 bg-black/70 shadow-lg flex flex-col"
              >
                {/* Bannière image */}
                <div className="relative h-24">
                  <img
                    src={m.bg}
                    alt={m.gpName}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  {/* Badge Alpine */}
                  <div className="absolute bottom-2 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff73c5]/80 border border-[#ffb3e4]/80 text-[10px] uppercase tracking-[0.2em] text-white">
                    <span className="w-2 h-2 rounded-full bg-cyan-300" />
                    <span>BWT Alpine F1 Team</span>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="px-5 py-4 flex flex-col gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-athena-rose mb-1">
                      Moment fort 2025 • {m.gpName}
                    </p>
                    <h4 className="text-lg font-semibold text-athena-gold mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-athena-rose mb-2">
                      {m.subtitle}
                    </p>
                  </div>

                  <div className="text-xs">
                    <p className="font-semibold text-athena-gold">
                      Qualifications :{" "}
                      <span className="text-athena-rose">{m.quali}</span>
                    </p>
                    <p className="text-neutral-200 mb-2">
                      Résultat en course :{" "}
                      <span className="font-semibold text-yellow-400">
                        {m.course}
                      </span>
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300">{m.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>


        {/* RÉSULTATS / CLASSEMENT / STATS 2025 */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
            <img
              src="/saison2025/resultats.png"
              alt="Résultats 2025"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-center text-sm text-gray-200">
              Résultats 2025
            </div>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
            <img
              src="/saison2025/classement.png"
              alt="Classement 2025"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-center text-sm text-gray-200">
              Classement 2025
            </div>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col">
            <img
              src="/saison2025/stats.png"
              alt="Stats 2025"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-center text-sm text-gray-200">
              Stats 2025
            </div>
          </div>
        </div>

        {/* RÉSUMÉ SAISON */}
        <div className="mt-12 bg-black/50 border border-athena-gold/30 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-athena-gold mb-6 flex items-center gap-2">
            📖 Résumé de la Saison 2025
          </h3>

          <div className="text-gray-200 leading-relaxed space-y-4 text-sm">
            <p>
              C’était une saison que personne n’oubliera. Celle où une rookie
              italienne a changé le visage de la Formule 1. Dès le premier
              week-end à <span className="text-athena-gold">Melbourne</span>,
              Serena Salvini s’est imposée comme une révélation : P5 en
              qualifications, P5 en course — la jeune pilote Alpine a
              immédiatement prouvé qu’elle n’était pas là pour apprendre, mais
              pour se battre.
            </p>

            <p>
              En <span className="text-athena-gold">Chine</span> et au{" "}
              <span className="text-athena-gold">Japon</span>, elle a confirmé
              sa régularité avant un coup d’éclat à{" "}
              <span className="text-athena-gold">Bahreïn (P4)</span>. Malgré
              des abandons à Jeddah et Miami,{" "}
              <span className="text-athena-gold">Monaco</span> restera le
              déclic : sous la pluie, elle signe un podium historique — le
              premier d’une femme depuis des décennies.
            </p>

            <p>
              Après <span className="text-athena-gold">Montréal</span>,{" "}
              <span className="text-athena-gold">Spa</span> et{" "}
              <span className="text-athena-gold">Singapour</span>, elle atteint
              l’apothéose à{" "}
              <span className="text-athena-gold">Las Vegas</span> : première
              victoire de sa carrière, première victoire d’une femme en F1
              moderne. Sous les lumières du Strip, Athéna triomphe.
            </p>

            <p>
              Avec{" "}
              <span className="text-athena-gold font-semibold">5 podiums</span>,{" "}
              <span className="text-athena-gold font-semibold">
                1 victoire
              </span>{" "}
              et{" "}
              <span className="text-athena-gold font-semibold">
                172 points
              </span>
              , Serena Salvini conclut sa saison rookie à la 6ᵉ place du
              championnat. Une performance légendaire qui dépasse les chiffres.
            </p>

            <p className="text-right italic text-athena-gold/80 mt-4">
              « Elle n’a pas seulement marqué des points. Elle a marqué une
              génération. » — F1 Chronicle, 2025
            </p>
          </div>
        </div>

        {/* CALENDRIER & POPUPS */}
        <div className="mt-14">
          <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
            📅 Calendrier & Résultats 2025
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
