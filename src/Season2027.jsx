import React from "react";
import { motion } from "framer-motion";

const moments2027 = [
  {
    key: "australie",
    gpName: "Grand Prix d’Australie",
    title: "Première victoire avec Red Bull 🇦🇺",
    subtitle: "Premier Grand Prix avec Red Bull Racing, première victoire.",
    quali: "P5",
    course: "P1",
    description:
      "Pour son tout premier départ avec Oracle Red Bull Racing, Séréna transforme la pression en domination. Une victoire nette, qui pose le ton de la saison.",
    // Mets ici le chemin vers ton image d'Australie
    bg: "/moments2027/australie.jpg",
  },
  {
    key: "arabiesaoudite",
    gpName: "Grand Prix d’Arabie Saoudite",
    title: "Week-end le plus dominant 🇸🇦",
    subtitle: "Pole position, rythme intouchable, victoire écrasante.",
    quali: "P1",
    course: "P1",
    description:
      "À Djeddah, Séréna signe le week-end le plus dominant de sa carrière : meilleure à chaque séance, pole position et victoire sans jamais être inquiétée.",
    // Mets ici le chemin vers ton image d'Arabie Saoudite
    bg: "/moments2027/arabiesaoudite.jpg",
  },
];

const stats2027 = [
  { label: "Équipe", value: "Oracle Red Bull Racing", teamColor: "redbull" },
  { label: "🏆 Victoires", value: "4" },
  { label: "🥇 Podiums", value: "5" },
  { label: "⚡ Poles", value: "1" },
  { label: "🏁 Points", value: "122" },
  { label: "🏆 Place au championnat", value: "En cours" },
];

function getStatCardClasses(teamColor) {
  const base =
    "rounded-2xl px-4 py-4 text-center shadow-md bg-black/80 border ";
  if (teamColor === "redbull") {
    return base + "border-red-500 bg-[#0e0b1f]/80";
  }
  return base + "border-athena-gold/40";
}

function getStatTextClasses(teamColor) {
  const base = "text-lg md:text-xl font-bold ";
  if (teamColor === "redbull") {
    return base + "text-red-400";
  }
  return base + "text-athena-gold";
}

function getStatLabelClasses(teamColor) {
  const base = "mt-1 text-[11px] md:text-xs ";
  if (teamColor === "redbull") {
    return base + "text-red-300/80";
  }
  return base + "text-athena-rose";
}

const Season2027 = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#050816] via-[#020308] to-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre & intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-red-400 mb-2">
            Saison 2027 — F1 (en cours)
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-athena-gold">
            Oracle Red Bull Racing — Nouveau chapitre, départ canon
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-3xl mx-auto">
            Pour 2027, Séréna Salvini rejoint{" "}
            <span className="text-[#3686ff] font-semibold">
              Oracle Red Bull Racing
            </span>
            . Après ses années de construction chez Alpine, elle ouvre ce
            nouveau chapitre par une série de résultats monstrueux :{" "}
            <span className="text-athena-gold font-semibold">
              4 victoires et 5 podiums en 5 courses.
            </span>
          </p>
        </motion.div>

        {/* Ligne de stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14"
        >
          {stats2027.map((s) => (
            <div key={s.label} className={getStatCardClasses(s.teamColor)}>
              <p className={getStatTextClasses(s.teamColor)}>{s.value}</p>
              <p className={getStatLabelClasses(s.teamColor)}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Moments forts 2027 */}
        <div className="mb-14">
          <h3 className="text-2xl md:text-3xl font-semibold text-athena-gold mb-4">
            🌟 Moments forts de la Saison 2027
          </h3>
          <p className="text-sm text-neutral-300 mb-4">
            Les premiers repères de la saison 2027. Cette section sera enrichie
            au fur et à mesure des nouveaux exploits réalisés en piste.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments2027.map((m, index) => (
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
                  {/* Badge Red Bull */}
                  <div className="absolute bottom-2 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/80 border border-red-400/80 text-[10px] uppercase tracking-[0.2em] text-white">
                    <span className="w-2 h-2 rounded-full bg-yellow-300" />
                    <span>Oracle Red Bull Racing</span>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="px-5 py-4 flex flex-col gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-athena-rose mb-1">
                      Moment fort 2027 • {m.gpName}
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

        {/* Phrase de fin */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-athena-gold/50 rounded-2xl p-6 bg-black/60 shadow-lg"
        >
          <p className="text-sm text-neutral-300 mb-2">
            La saison 2027 n&apos;est pas encore terminée, mais une chose est
            déjà claire : le transfert chez Red Bull a transformé Séréna en
            menace permanente pour le titre.
          </p>
          <p className="italic text-athena-rose text-base">
            « Ce n&apos;est que le début. On écrit le reste, course après
            course. »
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Season2027;
