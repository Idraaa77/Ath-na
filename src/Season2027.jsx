import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Season2027 = () => {
  const [selectedGP, setSelectedGP] = useState(null);

  // ===== STATS GLOBALES 2027 =====
  const stats2027 = useMemo(
    () => [
      { label: "Équipe", value: "Oracle Red Bull Racing", teamColor: "redbull" },
      { label: "🏆 Victoires", value: "9" },
      { label: "🥇 Podiums", value: "32" },
      { label: "⚡ Poles", value: "8" },
      { label: "🏁 Points", value: "392" },
      { label: "🏆 Place au championnat", value: "P1" },
    ],
    []
  );

  // ===== RÉSUMÉ SAISON 2027 (ton texte) =====
 const seasonSummaryBlocks = [
  {
    type: "p",
    parts: [
      "C’était une saison que personne n’oubliera. ",
      "Celle où une pilote italienne a défié non seulement ses adversaires, mais aussi son propre camp.",
      " Celle où le talent a résisté à la politique, et où la piste a parlé plus fort que les consignes."
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: [
      "Dès les premiers Grands Prix, Serena Salvini impose le tempo. Poles, victoires, podiums : ",
      "elle ne demande pas l’autorisation.",
      " Chez Red Bull, l’équilibre est fragile. Officiellement, Max Verstappen reste l’homme fort. Officieusement, une menace interne grandit week-end après week-end."
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: [
      "La saison est marquée par des décisions troubles. Avantages stratégiques orientés. Améliorations à sens unique. Qualifications où la piste favorable n’est jamais pour elle. ",
      "Et pourtant, Salvini répond toujours sur l’asphalte.",
      " À chaque fois qu’on tente de la ralentir, elle trouve une autre voie pour gagner."
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: [
      "Le point de rupture arrive au cœur de l’été. Des incidents en course, des tensions radios, des décisions FIA incomprises. Deux disqualifications en fin de saison qui auraient pu briser n’importe qui. ",
      "Mais pas elle.",
      " À chaque coup porté, Serena répond par un podium, une pole, ou une victoire."
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: [
      "Face à elle, Leclerc s’accroche avec Ferrari, Norris et Piastri montent en puissance, Verstappen résiste. Mais la différence se fait ailleurs : ",
      "dans la constance, dans le sang-froid, dans la capacité à transformer chaque opportunité en points.",
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: [
      "Et puis vient Abu Dhabi. Sous les projecteurs, sans calcul, sans aide, Serena Salvini signe la pole. Le lendemain, elle mène la course de bout en bout. ",
      "Pas de drame. Pas de polémique. Juste une démonstration.",
    ],
    highlight: [1],
  },
  {
    type: "p",
    parts: ["Championne du monde."],
    highlight: [0],
  },
  {
    type: "p",
    parts: [
      "Avec ",
      "9 victoires, 8 poles, 32 podiums et 392 points",
      ", Serena Salvini devient :"
    ],
    highlight: [1],
  },
  {
    type: "list",
    items: [
      "la première femme championne du monde de Formule 1,",
      "la première coéquipière à battre Max Verstappen sur une saison complète,",
      "et le symbole d’une nouvelle ère."
    ],
  },
  {
    type: "p",
    parts: ["Cette saison n’a pas seulement couronné une pilote. ", "Elle a changé l’histoire."],
    highlight: [1],
  },
];


  // ===== MOMENTS FORTS 2027 =====
  const moments2027 = [
    {
      key: "abudhabi",
      gpName: "Grand Prix d’Abu Dhabi",
      title: "Abu Dhabi : la démonstration finale 🇦🇪",
      subtitle: "Pole + victoire, course menée de bout en bout.",
      quali: "P1",
      course: "P1",
      description:
        "Sous les projecteurs, Serena verrouille le week-end parfait : pole le samedi, contrôle total le dimanche. Titre scellé sans polémique.",
      bg: "/moments2027/abudhabi.jpg",
      badgeTeam: "Oracle Red Bull Racing",
    },
    {
      key: "rupture_ete",
      gpName: "Point de rupture (été)",
      title: "La saison bascule 🔥",
      subtitle: "Tensions, radios, décisions contestées… et réponse en piste.",
      quali: "—",
      course: "—",
      description:
        "Le cœur de saison devient un bras de fer permanent. Chaque coup est renvoyé : une pole, un podium, une victoire.",
      bg: "/moments2027/ete.jpg",
      badgeTeam: "Oracle Red Bull Racing",
    },
    {
      key: "deux_ds",
      gpName: "Fin de saison",
      title: "Deux disqualifications… puis la révolte 🟥",
      subtitle: "Elle aurait pu tomber. Elle a accéléré.",
      quali: "—",
      course: "—",
      description:
        "Deux disqualifications qui auraient brisé n’importe qui. Serena transforme la frustration en performance pure : constance, sang-froid, points.",
      bg: "/moments2027/finsaison.jpg",
      badgeTeam: "Oracle Red Bull Racing",
    },
    {
      key: "duel_title",
      gpName: "Duel au sommet",
      title: "La guerre de nerfs 🏁",
      subtitle: "Leclerc s’accroche, Norris/Piastri montent, Max résiste.",
      quali: "—",
      course: "—",
      description:
        "La différence se fait sur la constance et l’exécution. Serena transforme chaque opportunité en points, même quand le contexte se retourne.",
      bg: "/moments2027/duel.jpg",
      badgeTeam: "Oracle Red Bull Racing",
    },
    {
      key: "saison_histoire",
      gpName: "Bilan",
      title: "La saison qui change l’histoire 🏆",
      subtitle: "9 victoires, 8 poles, 32 podiums, 392 points.",
      quali: "—",
      course: "—",
      description:
        "Première femme championne du monde, première coéquipière à battre Verstappen sur une saison complète : symbole d’une nouvelle ère.",
      bg: "/moments2027/histoire.jpg",
      badgeTeam: "Oracle Red Bull Racing",
    },
  ];

  // ===== CALENDRIER 2027 (tu peux compléter) =====
// Calendrier 2027 – Résultats complets

const calendar2027 = [
    {
      gp: "Australie",
      flag: "🇦🇺",
      qualif: "P5",
      course: "P1",
      resume: "Saison 2026 lancée à Melbourne avec une victoire historique.",
    },
    {
       gp: "Chine",
      flag: "🇨🇳",
      qualif: "P5",
      course: "P1",
      resume:
        "Week end dominant, elle maîtrise la Red Bull comme si elle la conduisait depuis longtemps.",
    },
    {
      gp: "Japon",
      flag: "🇯🇵",
      qualif: "P7",
      course: "P3",
      resume: "Remontée propre à Suzuka après des qualifications compliquées.",
    },
    {
         gp: "Bahreïn",
      flag: "🇧🇭",
      qualif: "P4",
      course: "P1",
      resume:
        "Grosse remontée de la 4ème place jusqu’a la victoire finale.",
    },
    {
          gp: "Jeddah",
      flag: "🇸🇦",
      qualif: "P1",
      course: "P1",
      resume:
        "Pole historique et Grand Slam.",
    },
    {
      gp: "Miami",
      flag: "🇺🇸",
      qualif: "P1",
      course: "P6",
      resume:
        "Pole position en Floride, course plus chaotique le dimanche.",
    },
    {
    gp: "Imola",
      flag: "🇮🇹",
      qualif: "P7",
      course: "P8",
      resume:
        "Week-end tendu à Imola, marqué par l’incident avec Verstappen.",
    },
    {
     gp: "Monaco",
      flag: "🇲🇨",
      qualif: "P1",
      course: "P1",
      resume:
        "Pole position dans les rues de Monte-Carlo, course excepionnellement maîtrisée.",
    },
    {
       gp: "Espagne",
      flag: "🇪🇸",
      qualif: "P4",
      course: "P21",
      resume: "Russell et Verstappen ont décider de ruiner la course.",
    },
    {
    gp: "Canada",
      flag: "🇨🇦",
      qualif: "P1",
      course: "P1",
      resume:
        "Pole à Montréal, victoire dominante.",
    },
    {
          gp: "Autriche",
      flag: "🇦🇹",
      qualif: "P2",
      course: "P3",
      resume: "Troisième passage au Red Bull Ring, podium bien maîtrisé.",
    },
    {
     gp: "Silverstone",
      flag: "🇬🇧",
      qualif: "P13",
      course: "DNF",
      resume:
        "Contact avec Verstappen qui ruine la course.",
    },
    {
            gp: "Belgique",
      flag: "🇧🇪",
      qualif: "P10",
      course: "P6",
      resume:
        "Course compliquée, mauvais sétup.",
    },
    {
      gp: "Hongrie",
      flag: "🇭🇺",
      qualif: "P3",
      course: "P3",
      resume:
        "Hungaroring solide, podium mérité sur un tracé exigeant.",
    },
    {
      gp: "Pays-Bas",
      flag: "🇳🇱",
      qualif: "DNS",
      course: "P3",
      resume:
        "Enorme remontée par la Princesse de la vitesse.",
    },
    {
      gp: "Monza",
      flag: "🇮🇹",
      qualif: "P2",
      course: "P2",
      resume:
        "Temple de la vitesse : très bon samedi, dimanche plus compliqué.",
    },
    {
      gp: "Bakou",
      flag: "🇦🇿",
      qualif: "P2",
      course: "P2",
      resume:
        "Course urbaine propre à Bakou, bon podium à l’arrivée.",
    },
    {
      gp: "Singapour",
      flag: "🇸🇬",
      qualif: "P2",
      course: "P1",
      resume:
        "Presque pole et victoire à Marina Bay, réponse parfaite aux polémiques.",
    },
    {
      gp: "Texas (Austin)",
      flag: "🇺🇸",
      qualif: "P2",
      course: "P2",
      resume:
        "COTA maîtrisé, podium tactique sous le soleil du Texas.",
    },
    {
      gp: "Mexique",
      flag: "🇲🇽",
      qualif: "P1",
      course: "P2",
      resume:
        "Problème mécanique en course, week-end frustrant malgré une pole.",
    },
    {
      gp: "Brésil",
      flag: "🇧🇷",
      qualif: "P3",
      course: "P1",
      resume:
        "Interlagos très solide, gagne 2 places.",
    },
    {
      gp: "Las Vegas",
      flag: "🇺🇸",
      qualif: "DNS",
      course: "DNS",
      resume:
        "RedBull l'a fait disqualifier.",
    },
    {
      gp: "Qatar",
      flag: "🇶🇦",
      qualif: "DNS",
      course: "DNS",
      resume:
        "RedBull l'a fait disqualifier.",
    },
    {
      gp: "Abu Dhabi",
      flag: "🇦🇪",
      qualif: "P1",
      course: "P1",
      resume:
        "Finale à Yas Marina, victoire et championne du monde, week end dominant.",
    },
  ];



  const resultColor = (value) => {
    if (value === "P1") return "text-yellow-400";
    if (value === "P2") return "text-gray-100";
    if (value === "P3") return "text-orange-400";
    if (value === "DNF") return "text-red-500";
    return "text-athena-rose";
  };

  return (
    <section id="season2027" className="bg-athena-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITRE + SOUS-TITRE */}
        <motion.h2
          className="text-4xl font-bold text-athena-gold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🏆 Saison 2027 : Championne du monde
        </motion.h2>

        {/* RÉSUMÉ (STYLE 2025/2026) */}
        <motion.div
          className="rounded-2xl p-8 mb-14 border border-athena-gold/40 bg-black/60 shadow-[0_0_35px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-athena-gold mb-5 flex items-center gap-3">
            <span className="text-athena-gold">📖</span> Résumé de la Saison 2027
          </h3>

          <div className="text-gray-200 leading-relaxed space-y-5 text-sm">
  {seasonSummaryBlocks.map((block, idx) => {
    if (block.type === "list") {
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="text-gray-200">
              {it}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={idx}>
        {block.parts.map((part, i) => {
          const isHighlight = block.highlight?.includes(i);
          return (
            <span
              key={i}
              className={isHighlight ? "text-athena-gold font-semibold" : ""}
            >
              {part}
            </span>
          );
        })}
      </p>
    );
  })}
</div>

  

          <p className="mt-6 text-right text-xs text-athena-gold italic">
            « Elle n’a pas gagné parce qu’on l’a laissée faire. Elle a gagné parce qu’on n’a pas réussi à l’arrêter. »
            — F1 Chronicle, fin de saison
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {stats2027.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl px-6 py-4 text-center shadow-md bg-black/80 border ${
                s.teamColor === "redbull" ? "border-red-500/60" : "border-athena-gold/40"
              }`}
            >
              <p
                className={`text-2xl font-bold ${
                  s.teamColor === "redbull" ? "text-red-400" : "text-athena-gold"
                }`}
              >
                {s.value}
              </p>
              <p className="mt-1 text-xs text-athena-rose">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* MOMENTS FORTS */}
        <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
          ✨ Moments forts : Saison 2027
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-16">
          {moments2027.map((m, index) => (
            <motion.article
              key={m.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-athena-gold/40 bg-black/70 shadow-lg flex flex-col"
            >
              <div className="relative h-20">
                <img
                  src={m.bg}
                  alt={m.gpName}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                <div className="absolute bottom-2 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-[10px] uppercase tracking-[0.2em] text-white">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>{m.badgeTeam}</span>
                </div>
              </div>

              <div className="px-4 py-4 flex flex-col gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-athena-rose mb-1">
                    Moment fort 2027 • {m.gpName}
                  </p>
                  <h4 className="text-base font-semibold text-athena-gold mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-athena-rose mb-2">{m.subtitle}</p>
                </div>

                <div className="text-xs">
                  <p className="font-semibold text-athena-gold">
                    Qualifications : <span className="text-athena-rose">{m.quali}</span>
                  </p>
                  <p className="text-neutral-200">
                    Résultat en course :{" "}
                    <span className={`font-semibold ${resultColor(m.course)}`}>{m.course}</span>
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">{m.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* IMAGES (comme 2026) */}
        <h3 className="text-3xl font-bold text-athena-gold mb-8 text-center">
          📊 Résultats, Classement & Stats 2027
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2027/resultats.png"
              alt="Résultats 2027"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">Résultats 2027</p>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2027/classement.png"
              alt="Classement 2027"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">Classement 2027</p>
          </div>

          <div className="border border-athena-gold/40 rounded-2xl overflow-hidden bg-black/60 flex flex-col hover:scale-105 transition shadow-lg">
            <img
              src="/saison2027/stats.png"
              alt="Stats 2027"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-center text-sm text-gray-200">Stats 2027</p>
          </div>
        </div>

        {/* CALENDRIER 2027 */}
        <h3 className="text-3xl font-bold text-athena-gold mb-6 text-center">
          📅 Calendrier & Résultats 2027
        </h3>

        <p className="text-xs text-neutral-300 text-center mb-6">
          (Tu peux compléter le calendrier quand tu veux — le système popup est déjà prêt.)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calendar2027.map((item, index) => (
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
                  <span className="text-athena-rose font-semibold">{item.qualif}</span>
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-gray-400">Course :</span>
                <span className={`text-sm font-bold ${resultColor(item.course)}`}>
                  {item.course}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* POPUP GP 2027 */}
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
                <span>{selectedGP.gp} 2027</span>
              </h4>

              <p className="text-sm text-gray-400 mb-4">
                Qualification :{" "}
                <span className="text-athena-rose font-semibold">{selectedGP.qualif}</span>{" "}
                • Course :{" "}
                <span className={`font-semibold ${resultColor(selectedGP.course)}`}>
                  {selectedGP.course}
                </span>
              </p>

              <p className="text-gray-100 leading-relaxed">{selectedGP.resume}</p>

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

export default Season2027;
