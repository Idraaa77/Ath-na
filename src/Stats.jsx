import React from "react";
import { motion } from "framer-motion";

const statCards = [
  { label: "Titres mondiaux", value: "12", hint: "Karting, F4, F3, F2, WRC, WEC, NASCAR, F1 Academy" },
  { label: "Victoires en carrière", value: "390", hint: "Toutes disciplines confondues" },
  { label: "Podiums", value: "734", hint: "Régularité d’Athéna sur plusieurs années" },
  { label: "Poles position", value: "267", hint: "Toujours aux avant-postes en qualifs" },
];

const disciplineBreakdown = [
  { name: "Karting", wins: 134 },
  { name: "Monoplaces (F4/F3/F2)", wins: 111 },
  { name: "Endurance (WEC / 24h)", wins: 43 },
  { name: "NASCAR & Oval", wins: 63 },
  { name: "Rallye (WRC)", wins: 12 },
  { name: "IndyCar / 500 Miles", wins: 27 },
];

// Statistiques globales F1 (avec 2027)
const f1GlobalStats = [
  { label: "Saisons disputées en F1", value: "3", hint: "2025 • 2026 • 2027 (terminée)" },

  // ⚠️ Je mets 72 par cohérence 2025+2026+2027 (3 saisons complètes).
  // Si ton mode carrière a un nombre de GP différent, dis-moi le total exact et je te l’ajuste.
  { label: "Grands Prix disputés", value: "72", hint: "Total de départs en F1 (3 saisons complètes)" },

  { label: "Victoires en F1", value: "15", hint: "1 (2025) • 5 (2026) • 9 (2027)" },
  { label: "Podiums en F1", value: "32", hint: "5 (2025) • 11 (2026) • 16 (2027)" },
  { label: "Poles position en F1", value: "12", hint: "0 (2025) • 4 (2026) • 8 (2027)" },
  { label: "Meilleur classement pilote", value: "1ᵉʳ", hint: "Championne du monde 2027" },
];



// Statistiques par saison F1
const f1SeasonStats = [
  {
    season: "2025",
    team: "BWT Alpine F1 Team",
    wins: 1,
    podiums: 5,
    poles: 0,
    points: 172,
    position: "6ᵉ",
  },
  {
    season: "2026",
    team: "BWT Alpine F1 Team",
    wins: 5,
    podiums: 11,
    poles: 4,
    points: 324,
    position: "2ᵉ",
  },
  {
    season: "2027",
    team: "Oracle Red Bull Racing",
    wins: 9,
    podiums: 16,
    poles: 8,
    points: 392,
    position: "1ᵉʳ (Championne du monde)",
  },
];


// Pour mini "graph" d'évolution des points
const f1PointsEvolution = f1SeasonStats.map((s) => ({
  season: s.season,
  points: s.points,
}));

const Stats = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white px-6 py-20 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-athena-gold mb-10 text-center"
        >
          📊 Statistiques de carrière
        </motion.h1>

        {/* Statistiques globales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-athena-black/80 border border-athena-gold/60 rounded-2xl p-4 text-center shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-athena-rose mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-athena-gold mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-neutral-300">{stat.hint}</p>
            </motion.div>
          ))}
        </div>

        {/* Répartition par discipline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-athena-gold mb-4"
        >
          🏁 Victoires par discipline
        </motion.h2>

        <div className="mt-4 space-y-3 mb-12">
          {disciplineBreakdown.map((disc, index) => (
            <motion.div
              key={disc.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-200">{disc.name}</span>
                <span className="text-athena-gold font-semibold">
                  {disc.wins} victoires
                </span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-athena-gold"
                  style={{ width: `${Math.min(disc.wins * 3, 100)}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATISTIQUES F1 */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-athena-gold mb-6"
        >
          🏎️ Statistiques F1
        </motion.h2>

        {/* Cartes globales F1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {f1GlobalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-athena-black/80 border border-athena-gold/70 rounded-2xl p-4 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-athena-rose mb-2">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-athena-gold mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-neutral-300">{stat.hint}</p>
            </motion.div>
          ))}
        </div>

        {/* Tableau par saison F1 */}
        <div className="mt-4 mb-10 overflow-x-auto">
          <table className="w-full text-sm border border-athena-gold/40 border-collapse">
            <thead className="bg-athena-black/80">
              <tr>
                <th className="border border-athena-gold/40 px-3 py-2 text-left">Saison</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-left">Équipe</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-center">Victoires</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-center">Podiums</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-center">Poles</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-center">Points</th>
                <th className="border border-athena-gold/40 px-3 py-2 text-center">Classement</th>
              </tr>
            </thead>
            <tbody>
              {f1SeasonStats.map((row, index) => (
                <tr
                  key={row.season}
                  className={index % 2 === 0 ? "bg-[#0b0b0b]" : "bg-[#111111]"}
                >
                  <td className="border border-athena-gold/20 px-3 py-2">{row.season}</td>
                  <td className="border border-athena-gold/20 px-3 py-2">{row.team}</td>
                  <td className="border border-athena-gold/20 px-3 py-2 text-center">
                    {row.wins}
                  </td>
                  <td className="border border-athena-gold/20 px-3 py-2 text-center">
                    {row.podiums}
                  </td>
                  <td className="border border-athena-gold/20 px-3 py-2 text-center">
                    {row.poles}
                  </td>
                  <td className="border border-athena-gold/20 px-3 py-2 text-center">
                    {row.points}
                  </td>
                  <td className="border border-athena-gold/20 px-3 py-2 text-center">
                    {row.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mini “graph” d’évolution des points F1 */}
        <div className="mt-6 mb-10">
          <h3 className="text-xl font-semibold text-athena-gold mb-3">
            📈 Évolution des points en F1
          </h3>
          <div className="flex items-end gap-4">
            {f1PointsEvolution.map((item, index) => {
              const maxPoints = Math.max(...f1PointsEvolution.map((i) => i.points));
              const height = (item.points / maxPoints) * 160; // px

              return (
                <motion.div
                  key={item.season}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className="w-6 md:w-10 bg-athena-gold rounded-t-lg"
                    style={{ height }}
                  />
                  <p className="mt-2 text-xs text-neutral-300">Saison {item.season}</p>
                  <p className="text-xs text-athena-rose">{item.points} pts</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note RP */}
        <p className="mt-10 text-xs text-neutral-400 text-center">
          Tous les chiffres sont indicatifs et adaptés au RP d&apos;Athéna. Tu peux modifier ces valeurs dans le fichier{" "}
          <span className="text-athena-rose font-semibold">Stats.jsx</span>, y compris les statistiques F1.
        </p>
      </div>
    </section>
  );
};

export default Stats;
