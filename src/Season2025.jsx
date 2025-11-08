import { motion } from "framer-motion";

export default function Season2025() {
  const races = [
    {
      title: "Podium à Monaco 🇲🇨",
      desc: "Sous une pluie fine et constante, Serena a démontré une maîtrise rare, affrontant les virages mythiques du Rocher avec calme et précision. Ce jour-là, elle a prouvé qu’elle pouvait défier les plus grands sur leur propre terrain.",
      img: "/moments2025/1.jpg",
      podium: [
        { src: "/podiums2025/monaco_p1.png", place: "P1", color: "bg-yellow-500" },
        { src: "/podiums2025/monaco_p2.png", place: "P2", color: "bg-gray-300" },
        { src: "/podiums2025/monaco_p3.png", place: "P3", color: "bg-orange-600" },
      ],
    },
    {
      title: "Podium au Canada 🇨🇦",
      desc: "Sous le ciel de Montréal, un combat acharné s’est joué jusqu’au dernier virage. Serena signe un nouveau podium avec un dépassement audacieux sur Norris à quelques mètres de la ligne.",
      img: "/moments2025/2.jpg",
      podium: [
        { src: "/podiums2025/canada_p1.png", place: "P1", color: "bg-yellow-500" },
        { src: "/podiums2025/canada_p2.png", place: "P2", color: "bg-gray-300" },
        { src: "/podiums2025/canada_p3.png", place: "P3", color: "bg-orange-600" },
      ],
    },
    {
      title: "Podium en Belgique 🇧🇪",
      desc: "Sur le tracé mythique de Spa-Francorchamps, les virages de l’Eau Rouge n’ont fait qu’accentuer son audace. Une course stratégique, gérée avec la patience d’une vétérane.",
      img: "/moments2025/3.jpg",
      podium: [
        { src: "/podiums2025/belgique_p1.png", place: "P1", color: "bg-yellow-500" },
        { src: "/podiums2025/belgique_p2.png", place: "P2", color: "bg-gray-300" },
        { src: "/podiums2025/belgique_p3.png", place: "P3", color: "bg-orange-600" },
      ],
    },
    {
      title: "Podium à Singapour 🇸🇬",
      desc: "Sous les néons et la chaleur étouffante de la nuit asiatique, Athéna s’est hissée sur le podium avec un style flamboyant, marquant une nouvelle étape dans sa légende.",
      img: "/moments2025/4.jpg",
      podium: [
        { src: "/podiums2025/singapour_p1.png", place: "P1", color: "bg-yellow-500" },
        { src: "/podiums2025/singapour_p2.png", place: "P2", color: "bg-gray-300" },
        { src: "/podiums2025/singapour_p3.png", place: "P3", color: "bg-orange-600" },
      ],
    },
    {
      title: "Victoire à Las Vegas 🇺🇸",
      desc: "Sous les lumières de la ville du jeu, Serena réalise l’impossible. Une victoire historique, première d’une femme dans la F1 moderne, gravée dans la mémoire collective du sport.",
      img: "/moments2025/5.jpg",
      podium: [
        { src: "/podiums2025/vegas_p1.png", place: "P1", color: "bg-yellow-500" },
        { src: "/podiums2025/vegas_p2.png", place: "P2", color: "bg-gray-300" },
        { src: "/podiums2025/vegas_p3.png", place: "P3", color: "bg-orange-600" },
      ],
    },
  ];

  const calendar = [
    { date: "16/03", country: "🇦🇺 Australie", circuit: "Melbourne", result: "P5" },
    { date: "23/03", country: "🇨🇳 Chine", circuit: "Shanghai", result: "P6" },
    { date: "06/04", country: "🇯🇵 Japon", circuit: "Suzuka", result: "P8" },
    { date: "13/04", country: "🇧🇭 Bahreïn", circuit: "Sakhir", result: "P4" },
    { date: "20/04", country: "🇸🇦 Arabie Saoudite", circuit: "Jeddah", result: "DNF" },
    { date: "04/05", country: "🇺🇸 Miami", circuit: "Miami", result: "DNF" },
    { date: "18/05", country: "🇮🇹 Imola", circuit: "Imola", result: "P11" },
    { date: "25/05", country: "🇲🇨 Monaco", circuit: "Monte Carlo", result: "P2" },
    { date: "01/06", country: "🇪🇸 Espagne", circuit: "Barcelone", result: "P11" },
    { date: "15/06", country: "🇨🇦 Canada", circuit: "Montréal", result: "P3" },
    { date: "29/06", country: "🇦🇹 Autriche", circuit: "Spielberg", result: "P16" },
    { date: "06/07", country: "🇬🇧 Grande-Bretagne", circuit: "Silverstone", result: "DNF" },
    { date: "27/07", country: "🇧🇪 Belgique", circuit: "Spa", result: "P3" },
    { date: "03/08", country: "🇭🇺 Hongrie", circuit: "Budapest", result: "P18" },
    { date: "31/08", country: "🇳🇱 Pays-Bas", circuit: "Zandvoort", result: "P9" },
    { date: "07/09", country: "🇮🇹 Monza", circuit: "Monza", result: "DNF" },
    { date: "21/09", country: "🇦🇿 Azerbaïdjan", circuit: "Bakou", result: "P6" },
    { date: "05/10", country: "🇸🇬 Singapour", circuit: "Marina Bay", result: "P2" },
    { date: "19/10", country: "🇺🇸 Austin", circuit: "Austin", result: "P7" },
    { date: "26/10", country: "🇲🇽 Mexique", circuit: "Mexico City", result: "P20" },
    { date: "09/11", country: "🇧🇷 Brésil", circuit: "São Paulo", result: "P6" },
    { date: "22/11", country: "🇺🇸 Las Vegas", circuit: "The Strip", result: "P1" },
    { date: "30/11", country: "🇶🇦 Qatar", circuit: "Lusail", result: "P4" },
    { date: "07/12", country: "🇦🇪 Abu Dhabi", circuit: "Yas Marina", result: "DNF" },
  ];

  const getColor = (res) => {
    if (res === "P1") return "text-yellow-400";
    if (res === "P2") return "text-gray-200";
    if (res === "P3") return "text-amber-600";
    if (res === "DNF") return "text-red-500";
    return "text-gray-400";
  };

  return (
    <section id="season2025" className="bg-athena-black text-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-athena-gold mb-4 flex items-center gap-2">
          🏎️ Saison 2025 : L’éveil d’Athéna
        </h2>
        <p className="italic text-athena-rose mb-12">
          « Elle a changé le visage du paddock et prouvé que la gloire pouvait être un rêve. » — Autosport, 2025
        </p>

        {/* 🏆 Podiums */}
        <div className="flex flex-col gap-10">
          {races.map((r, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden border border-athena-gold/40 shadow-lg hover:shadow-athena-gold/30 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={r.img} alt={r.title} className="w-full h-80 object-cover brightness-[0.45]" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <h3 className="text-2xl font-semibold text-athena-gold mb-2">{r.title}</h3>
                <p className="text-gray-200 italic mb-6 max-w-3xl">{r.desc}</p>
                <div className="flex justify-center gap-6 items-end mb-4">
                  {r.podium.map((p, i) => (
                    <div key={i} className={`flex flex-col items-center ${i === 0 ? "scale-110" : "scale-100"}`}>
                      <div className={`relative rounded-full border-4 border-athena-gold shadow-lg ${p.color} p-1`}>
                        <img src={p.src} alt={p.place} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full" />
                      </div>
                      <span className="text-sm mt-2">{p.place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🗓️ Calendrier */}
        <div className="mt-16 border border-athena-gold/30 rounded-xl bg-athena-blue/10 p-6">
          <h3 className="text-2xl text-athena-gold font-semibold mb-6 flex items-center gap-2">
            🗓️ Calendrier & Résultats 2025
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {calendar.map((race, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between p-3 rounded-lg border border-athena-gold/20 bg-black/30 hover:bg-athena-gold/10 hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition duration-300"
              >
                <div className="text-[13px] font-medium text-gray-200 truncate">{race.country}</div>
                <div className="text-xs text-gray-400">{race.circuit}</div>
                <div className={`absolute bottom-2 right-2 text-sm font-semibold ${getColor(race.result)}`}>
                  {race.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🏁 Résumé */}
        <div className="mt-16 border border-athena-gold/40 bg-athena-blue/20 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-athena-gold mb-4 flex items-center gap-2">
            📖 Résumé de la Saison 2025
          </h3>
          <p className="text-gray-200 mb-4">
            C’était une saison que personne n’oubliera. Celle où une rookie italienne a changé le visage de la
            Formule 1. Dès le premier week-end à{" "}
            <span className="text-athena-gold">Melbourne</span>, Serena Salvini s’est imposée comme une révélation.
            P5 en qualifications, P5 en course — la jeune pilote Alpine a immédiatement prouvé qu’elle n’était pas
            là pour apprendre, mais pour se battre.
          </p>
          <p className="text-gray-200 mb-4">
            En <span className="text-athena-gold">Chine</span> et au{" "}
            <span className="text-athena-gold">Japon</span>, elle a confirmé sa régularité avant un coup d’éclat à{" "}
            <span className="text-athena-gold">Bahreïn</span> (P4). Malgré des abandons à Jeddah et Miami,{" "}
            <span className="text-athena-rose">Monaco</span> restera le déclic : sous la pluie, elle signe un podium
            historique — le premier d’une femme depuis des décennies.
          </p>
          <p className="text-gray-200 mb-4">
            Après <span className="text-athena-gold">Montréal</span>,{" "}
            <span className="text-athena-gold">Spa</span> et{" "}
            <span className="text-athena-gold">Singapour</span>, elle atteint l’apothéose à{" "}
            <span className="text-athena-gold">Las Vegas</span> : première victoire de sa carrière, première victoire
            d’une femme en F1 moderne. Sous les lumières du Strip, Athéna triomphe.
          </p>
          <p className="text-gray-200 mb-4">
            Avec <span className="text-athena-gold">5 podiums</span>,{" "}
            <span className="text-athena-gold">1 victoire</span> et{" "}
            <span className="text-athena-gold">172 points</span>, Serena Salvini conclut sa saison rookie à la 6e place
            du championnat. Une performance légendaire qui dépasse les chiffres.
          </p>
          <p className="text-athena-rose italic text-right">
            « Elle n’a pas seulement marqué des points. Elle a marqué une génération. » — F1 Chronicle, 2025
          </p>
        </div>
      </motion.div>
    </section>
  );
}
