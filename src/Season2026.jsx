import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Season2026 = () => {
  const [selectedGP, setSelectedGP] = useState(null);

  // ===== STATS GLOBALES 2026 =====
  const stats2026 = [
    { label: "Équipe", value: "BWT Alpine F1 Team", teamColor: "alpine" },
    { label: "🏆 Victoires", value: "5" },
    { label: "🥇 Podiums", value: "13" },
    { label: "⚡ Poles", value: "4" },
    { label: "🏁 Points", value: "324" },
    { label: "🏆 Place au championnat", value: "P2" },
  ];


   // ===== MOMENTS FORTS 2026 : 5 VICTOIRES (nouveau format) =====
  const moments2026 = [
    {
      key: "autriche_inverse",
      gpName: "Grand Prix d’Autriche (Inversé)",
      title: "Victoire en Autriche (Inversé) 🇦🇹",
      subtitle: "Remontée depuis le fond de grille.",
      quali: "P9",
      course: "P1",
      description:
        "Sur une course à grille inversée, Séréna remonte tout le peloton et s’offre une victoire spectaculaire au Red Bull Ring.",
      bg: "/moments2026/autriche_inverse.jpg",
    },
    {
      key: "belgique",
      gpName: "Grand Prix de Belgique",
      title: "Domination à Spa 🇧🇪",
      subtitle: "Pole + victoire sous pression.",
      quali: "P1",
      course: "P1",
      description:
        "Sous la pluie et la pression, elle signe une pole puis une victoire sans partage à Spa-Francorchamps.",
      bg: "/moments2026/belgique.jpg",
    },
    {
      key: "paysbas_inverse",
      gpName: "Grand Prix des Pays-Bas (Inversé)",
      title: "Remontée légendaire à Zandvoort 🇳🇱",
      subtitle: "De la P21 à la P1 devant le public de Verstappen.",
      quali: "P21",
      course: "P1",
      description:
        "Partie en fond de grille, Séréna remonte tout le monde à Zandvoort pour s’imposer chez Verstappen lui-même.",
      bg: "/moments2026/paysbas_inverse.jpg",
    },
    {
      key: "singapour",
      gpName: "Grand Prix de Singapour",
      title: "Victoire à Marina Bay 🇸🇬",
      subtitle: "Réponse parfaite aux polémiques.",
      quali: "P1",
      course: "P1",
      description:
        "Au cœur des polémiques avec la FIA, elle répond de la meilleure façon : pole et victoire sous les lumières de Singapour.",
      bg: "/moments2026/singapour.jpg",
    },
    {
      key: "texas",
      gpName: "Grand Prix des États-Unis (Austin)",
      title: "Triomphe au Texas 🇺🇸",
      subtitle: "Victoire tactique au COTA.",
      quali: "P5",
      course: "P1",
      description:
        "Sur le Circuit of the Americas, Séréna joue la stratégie parfaite et contrôle la course jusqu’au drapeau à damier.",
      bg: "/moments2026/texas.jpg",
    },
  ];


  // ===== CALENDRIER 2026 =====
  const calendar2026 = [
    {
      gp: "Australie",
      flag: "🇦🇺",
      qualif: "P4",
      course: "P5",
      resume: "Saison 2026 lancée à Melbourne avec un top 5 solide.",
    },
    {
      gp: "Chine",
      flag: "🇨🇳",
      qualif: "P10",
      course: "P10",
      resume:
        "Un week-end correct à Shanghai, points sécurisés sans prise de risque.",
    },
    {
      gp: "Japon",
      flag: "🇯🇵",
      qualif: "P20",
      course: "P14",
      resume: "Remontée propre à Suzuka après des qualifications compliquées.",
    },
    {
      gp: "Bahreïn",
      flag: "🇧🇭",
      qualif: "P21",
      course: "P4",
      resume:
        "Grosse remontée de l’arrière du peloton jusqu’au pied du podium.",
    },
    {
      gp: "Jeddah",
      flag: "🇸🇦",
      qualif: "P19",
      course: "DNF",
      resume:
        "Course stoppée prématurément dans les rues ultra-rapides de Djeddah.",
    },
    {
      gp: "Imola",
      flag: "🇮🇹",
      qualif: "P20",
      course: "DNF",
      resume:
        "Week-end tendu à Imola, marqué par l’incident avec Verstappen.",
    },
    {
      gp: "Monaco",
      flag: "🇲🇨",
      qualif: "P1",
      course: "P4",
      resume:
        "Pole position dans les rues de Monte-Carlo, course plus chaotique le dimanche.",
    },
    {
      gp: "Espagne",
      flag: "🇪🇸",
      qualif: "P20",
      course: "P3",
      resume: "Remontée monstrueuse à Barcelone jusqu’au podium.",
    },
    {
      gp: "Canada",
      flag: "🇨🇦",
      qualif: "P1",
      course: "P5",
      resume:
        "Pole à Montréal, course solide mais frustrante en rythme pur.",
    },
    {
      gp: "Autriche (Inversé)",
      flag: "🇦🇹",
      qualif: "P9",
      course: "P1",
      resume:
        "Course inversée : Serena remonte tout le monde et s’offre la victoire.",
    },
    {
      gp: "Autriche",
      flag: "🇦🇹",
      qualif: "P5",
      course: "P3",
      resume: "Deuxième passage au Red Bull Ring, podium bien maîtrisé.",
    },
    {
      gp: "Silverstone",
      flag: "🇬🇧",
      qualif: "P10",
      course: "P2",
      resume:
        "Silverstone livré en mode patronne, avec un podium au bout.",
    },
    {
      gp: "Belgique",
      flag: "🇧🇪",
      qualif: "P1",
      course: "P1",
      resume:
        "Spa dominé de bout en bout : pole et victoire sous la pression.",
    },
    {
      gp: "Hongrie",
      flag: "🇭🇺",
      qualif: "P6",
      course: "P3",
      resume:
        "Hungaroring solide, podium mérité sur un tracé exigeant.",
    },
    {
      gp: "Pays-Bas (Inversé)",
      flag: "🇳🇱",
      qualif: "P21",
      course: "P1",
      resume:
        "Remontée légendaire de la 21ᵉ à la 1ʳᵉ place chez Verstappen.",
    },
    {
      gp: "Pays-Bas",
      flag: "🇳🇱",
      qualif: "P7",
      course: "DNF",
      resume:
        "Course principale écourtée par un abandon, week-end contrasté.",
    },
    {
      gp: "Monza",
      flag: "🇮🇹",
      qualif: "P2",
      course: "P5",
      resume:
        "Temple de la vitesse : très bon samedi, dimanche plus compliqué.",
    },
    {
      gp: "Bakou",
      flag: "🇦🇿",
      qualif: "P2",
      course: "P4",
      resume:
        "Course urbaine propre à Bakou, bons points à l’arrivée.",
    },
    {
      gp: "Singapour",
      flag: "🇸🇬",
      qualif: "P1",
      course: "P1",
      resume:
        "Pole et victoire à Marina Bay, réponse parfaite aux polémiques.",
    },
    {
      gp: "Texas (Austin)",
      flag: "🇺🇸",
      qualif: "P5",
      course: "P1",
      resume:
        "COTA maîtrisé, victoire tactique sous le soleil du Texas.",
    },
    {
      gp: "Brésil",
      flag: "🇧🇷",
      qualif: "P4",
      course: "P4",
      resume:
        "Interlagos très solide, proche du podium.",
    },
    {
      gp: "Las Vegas",
      flag: "🇺🇸",
      qualif: "P5",
      course: "P2",
      resume:
        "Deuxième place sous les néons de Vegas, bataille intense jusqu’au bout.",
    },
    {
      gp: "Qatar",
      flag: "🇶🇦",
      qualif: "P6",
      course: "DNF",
      resume:
        "Course interrompue par un abandon, week-end inachevé.",
    },
    {
      gp: "Abu Dhabi",
      flag: "🇦🇪",
      qualif: "P17",
      course: "P2",
      resume:
        "Finale à Yas Marina, énorme remontée jusqu’à la deuxième place.",
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
    <section id="season2026" className="bg-athena-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITRE + SOUS-TITRE */}
        <motion.h2
          className="text-4xl font-bold text-athena-gold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ⚡ Saison 2026 : La Guerre contre la FIA
        </motion.h2>

        <motion.p
          className="text-center italic text-athena-rose mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          « Plus qu’une pilote, une révolution. » — BBC Sport, 2026
        </motion.p>

        {/* RÉSUMÉ DE SAISON */}
        <motion.div
          className="bg-black/50 border border-athena-gold/30 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-athena-gold mb-6 flex items-center gap-2">
            📖 Résumé de la Saison 2026
          </h3>
          <div className="text-gray-200 leading-relaxed space-y-4 text-sm">
            <p>
              2026 n’a pas seulement été une saison de Formule 1. C’était un bras
              de fer permanent entre Serena Salvini, son équipe et une FIA perçue
              comme hostile. Pénalités discutables, décisions étranges,
              inversions de grille — tout semblait conçu pour la freiner.
            </p>
            <p>
              Et pourtant, course après course,{" "}
              <span className="text-athena-gold font-semibold">
                Serena répond sur la piste
              </span>
              . Autriche inversé, Belgique, Pays-Bas inversé, Singapour, Austin :
              chaque victoire est une réponse directe aux polémiques.
            </p>
            <p>
              Avec{" "}
              <span className="text-athena-gold font-semibold">5 victoires</span>
              ,{" "}
              <span className="text-athena-gold font-semibold">
                13 podiums
              </span>{" "}
              et{" "}
              <span className="text-athena-gold font-semibold">4 pôles</span>, elle
              termine vice-championne du monde, en ayant fait trembler le système.
            </p>
            <p className="text-right italic text-athena-gold/80 mt-4">
              « Ils peuvent me briser l’aileron, pas la volonté. » — Serena
              Salvini, 2026
            </p>
          </div>
        </motion.div>

        {/* STATS */}
           <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {stats2026.map((s) => (
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



            {/* MOMENTS FORTS 2026 (nouveau style) */}
        <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
          🏆 Moments forts : les 5 victoires de 2026
        </h3>
        <p className="text-sm text-neutral-300 mb-6 text-center">
          Chaque victoire de 2026 est un bras de fer gagné contre la FIA, le
          paddock ou les circonstances.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {moments2026.map((m, index) => (
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
                    Moment fort 2026 • {m.gpName}
                  </p>
                  <h4 className="text-lg font-semibold text-athena-gold mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-athena-rose mb-2">{m.subtitle}</p>
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

        {/* IMAGES RÉSULTATS / CLASSEMENT / STATS 2026 */}
        <h3 className="text-3xl font-bold text-athena-gold mb-8 text-center">
          📊 Résultats, Classement & Stats 2026
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2026/resultats.png"
              alt="Résultats 2026"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">
              Résultats 2026
            </p>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2026/classement.png"
              alt="Classement 2026"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">
              Classement 2026
            </p>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2026/stats.png"
              alt="Stats 2026"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">
              Stats 2026
            </p>
          </div>
        </div>

        {/* CALENDRIER 2026 */}
        <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
          📅 Calendrier & Résultats 2026
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calendar2026.map((item, index) => (
            <motion.button
              key={item.gp + index}
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

      {/* POPUP GP 2026 */}
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
                <span>{selectedGP.gp} 2026</span>
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

export default Season2026;
