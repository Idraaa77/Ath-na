import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Season2026 = () => {
  const [selectedGP, setSelectedGP] = useState(null);

  // ===== STATS GLOBALES 2026 =====
  const stats = [
    { label: "🏆 Victoires", value: 5 },
    { label: "🥇 Podiums", value: 13 },
    { label: "⚡ Poles", value: 4 },
    { label: "🏁 Points", value: 411 },
    { label: "🏆 Place au championnat", value: "P2" }, // à changer si tu veux P1 etc.
  ];

  // ===== MOMENTS FORTS 2026 : 5 VICTOIRES =====
  const highlights2026 = [
    {
      id: 1,
      key: "autriche_inverse",
      title: "Victoire en Autriche (Inversé) 🇦🇹",
      subtitle: "Retourner le script, renverser l’ordre établi",
      text: "Partie depuis le fond de grille sur une course inversée, Serena remonte le peloton avec une agressivité chirurgicale. Une victoire symbole : même quand tout est contre elle, elle trouve un chemin vers l’avant.",
      bg: "/moments2026/autriche_inverse.jpg",
      podiums: {
        p1: "/podiums2026/autriche_inverse_p1.png",
        p2: "/podiums2026/autriche_inverse_p2.png",
        p3: "/podiums2026/autriche_inverse_p3.png",
      },
    },
    {
      id: 2,
      key: "belgique",
      title: "Victoire en Belgique 🇧🇪",
      subtitle: "Spa, la pluie, la domination totale",
      text: "Sous un ciel capricieux, Serena transforme Spa en terrain de jeu. Gestion parfaite des pneus, rythme implacable et aucun faux pas : une victoire construite comme une partition.",
      bg: "/moments2026/belgique.jpg",
      podiums: {
        p1: "/podiums2026/belgique_p1.png",
        p2: "/podiums2026/belgique_p2.png",
        p3: "/podiums2026/belgique_p3.png",
      },
    },
    {
      id: 3,
      key: "paysbas_inverse",
      title: "Victoire aux Pays-Bas (Inversé) 🇳🇱",
      subtitle: "De la 21ᵉ à la 1ʳᵉ place",
      text: "Devant un public entièrement acquis à Verstappen, Serena écrit l’une des plus grandes remontées de l’ère moderne : partie du fond, elle remonte tout le monde pour s’imposer. Une révolte plus qu’une course.",
      bg: "/moments2026/paysbas_inverse.jpg",
      podiums: {
        p1: "/podiums2026/paysbas_inverse_p1.png",
        p2: "/podiums2026/paysbas_inverse_p2.png",
        p3: "/podiums2026/paysbas_inverse_p3.png",
      },
    },
    {
      id: 4,
      key: "singapour",
      title: "Victoire à Singapour 🇸🇬",
      subtitle: "La nuit où elle a fait plier la FIA",
      text: "Pénalités contestées, décisions douteuses… et malgré tout, Serena s’impose sous les projecteurs de Marina Bay. Une revanche symbolique contre l’injustice, gagnée au mental autant qu’au volant.",
      bg: "/moments2026/singapour.jpg",
      podiums: {
        p1: "/podiums2026/singapour_p1.png",
        p2: "/podiums2026/singapour_p2.png",
        p3: "/podiums2026/singapour_p3.png",
      },
    },
    {
      id: 5,
      key: "texas",
      title: "Victoire à Austin 🇺🇸",
      subtitle: "Sous le soleil du Texas",
      text: "Sur le Circuit of the Americas, Serena signe une victoire tactique : gestion des relais, dépassements propres et contrôle total sur la fin de course. L’une des démonstrations les plus propres de sa saison.",
      bg: "/moments2026/texas.jpg",
      podiums: {
        p1: "/podiums2026/texas_p1.png",
        p2: "/podiums2026/texas_p2.png",
        p3: "/podiums2026/texas_p3.png",
      },
    },
  ];

  // ===== CALENDRIER 2026 (même principe que 2025) =====
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
      resume: "Un week-end correct à Shanghai, points sécurisés sans prise de risque.",
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
      resume: "Grosse remontée de l’arrière du peloton jusqu’au pied du podium.",
    },
    {
      gp: "Jeddah",
      flag: "🇸🇦",
      qualif: "P19",
      course: "DNF",
      resume: "Course stoppée prématurément dans les rues ultra-rapides de Djeddah.",
    },
    {
      gp: "Imola",
      flag: "🇮🇹",
      qualif: "P20",
      course: "DNF",
      resume: "Week-end tendu à Imola, marqué par l’incident avec Verstappen.",
    },
    {
      gp: "Monaco",
      flag: "🇲🇨",
      qualif: "P1",
      course: "P4",
      resume: "Pole position dans les rues de Monte-Carlo, course plus chaotique le dimanche.",
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
      resume: "Pole à Montréal, course solide mais frustrante en rythme pur.",
    },
    {
      gp: "Autriche (Inversé)",
      flag: "🇦🇹",
      qualif: "P9",
      course: "P1",
      resume: "Course inversée : Serena remonte tout le monde et s’offre la victoire.",
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
      resume: "Silverstone livré en mode patronne, avec un podium au bout.",
    },
    {
      gp: "Belgique",
      flag: "🇧🇪",
      qualif: "P1",
      course: "P1",
      resume: "Spa dominé de bout en bout : pole et victoire sous la pression.",
    },
    {
      gp: "Hongrie",
      flag: "🇭🇺",
      qualif: "P6",
      course: "P3",
      resume: "Hungaroring solide, podium mérité sur un tracé exigeant.",
    },
    {
      gp: "Pays-Bas (Inversé)",
      flag: "🇳🇱",
      qualif: "P21",
      course: "P1",
      resume: "Remontée légendaire de la 21ᵉ à la 1ʳᵉ place chez Verstappen.",
    },
    {
      gp: "Pays-Bas",
      flag: "🇳🇱",
      qualif: "P7",
      course: "DNF",
      resume: "Course principale écourtée par un abandon, week-end contrasté.",
    },
    {
      gp: "Monza",
      flag: "🇮🇹",
      qualif: "P2",
      course: "P5",
      resume: "Temple de la vitesse : très bon samedi, dimanche plus compliqué.",
    },
    {
      gp: "Bakou",
      flag: "🇦🇿",
      qualif: "P2",
      course: "P4",
      resume: "Course urbaine propre à Bakou, bons points à l’arrivée.",
    },
    {
      gp: "Singapour",
      flag: "🇸🇬",
      qualif: "P1",
      course: "P1",
      resume: "Pole et victoire à Marina Bay, réponse parfaite aux polémiques.",
    },
    {
      gp: "Texas (Austin)",
      flag: "🇺🇸",
      qualif: "P5",
      course: "P1",
      resume: "COTA maîtrisé, victoire tactique sous le soleil du Texas.",
    },
    {
      gp: "Brésil",
      flag: "🇧🇷",
      qualif: "P4",
      course: "P4",
      resume: "Interlagos très solide, proche du podium.",
    },
    {
      gp: "Las Vegas",
      flag: "🇺🇸",
      qualif: "P5",
      course: "P2",
      resume: "Deuxième place sous les néons de Vegas, bataille intense jusqu’au bout.",
    },
    {
      gp: "Qatar",
      flag: "🇶🇦",
      qualif: "P6",
      course: "DNF",
      resume: "Course interrompue par un abandon, week-end inachevé.",
    },
    {
      gp: "Abu Dhabi",
      flag: "🇦🇪",
      qualif: "P17",
      course: "P2",
      resume: "Finale à Yas Marina, énorme remontée jusqu’à la deuxième place.",
    },
  ];


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
          <div className="text-gray-200 leading-relaxed space-y-4">
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
              . En{" "}
              <span className="text-athena-gold">Autriche inversé</span>, elle
              remonte le peloton. En{" "}
              <span className="text-athena-gold">Belgique</span>, elle dompte la
              pluie. Aux{" "}
              <span className="text-athena-gold">Pays-Bas inversé</span>, elle
              signe une remontée légendaire. À{" "}
              <span className="text-athena-gold">Singapour</span> et{" "}
              <span className="text-athena-gold">Austin</span>, elle transforme
              la frustration en victoires éclatantes.
            </p>
            <p>
              Avec{" "}
              <span className="text-athena-gold font-semibold">5 victoires</span>
              ,{" "}
              <span className="text-athena-gold font-semibold">
                13 podiums
              </span>
              ,{" "}
              <span className="text-athena-gold font-semibold">4 pôles</span> et{" "}
              <span className="text-athena-gold font-semibold">411 points</span>,
              elle ne fait pas que survivre dans le peloton : elle s’impose comme
              une force majeure au cœur d’une saison marquée par la controverse.
            </p>
            <p className="text-right italic text-athena-gold/80 mt-6">
              « Ils peuvent me briser l’aileron, pas la volonté. » — Serena
              Salvini, 2026
            </p>
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-athena-blue/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
            >
              <p className="text-2xl md:text-3xl font-bold text-athena-gold">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm mt-2 text-athena-rose">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* MOMENTS FORTS : VICTOIRES */}
        <h3 className="text-3xl font-bold text-athena-gold mb-10 text-center">
          🏆 Moments forts : les 5 victoires de 2026
        </h3>
        <div className="space-y-12 mb-20">
          {highlights2026.map((h, idx) => (
            <motion.div
              key={h.id}
              className="relative overflow-hidden rounded-3xl border border-athena-gold/40 bg-black/60"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
                <img
                  src={h.bg}
                  alt={h.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-athena-gold mb-1">
                      {h.title}
                    </h4>
                    <p className="text-sm text-athena-rose mb-3">
                      {h.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-gray-100 max-w-3xl">
                      {h.text}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-end gap-6 mt-4">
                    {/* P1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-400/80 border-4 border-yellow-300 flex items-center justify-center shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]">
                        <img
                          src={h.podiums.p1}
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
                          src={h.podiums.p2}
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
                          src={h.podiums.p3}
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
