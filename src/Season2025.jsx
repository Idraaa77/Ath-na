import React from "react";
import { motion } from "framer-motion";

const Season2025 = () => {
  const moments = [
    {
      key: "monaco",
      title: "Podium à Monaco 🇲🇨",
      quote: "2e place sous la pluie, un moment de pure concentration.",
      halo: "shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]",
    },
    {
      key: "canada",
      title: "Podium au Canada 🇨🇦",
      quote: "Une bataille intense jusqu’au dernier virage.",
      halo: "shadow-[0_0_20px_4px_rgba(0,191,255,0.5)]",
    },
    {
      key: "belgique",
      title: "Podium en Belgique 🇧🇪",
      quote: "Une course solide et stratégique à Spa.",
      halo: "shadow-[0_0_20px_4px_rgba(255,215,0,0.6)]",
    },
    {
      key: "singapour",
      title: "Podium à Singapour 🇸🇬",
      quote: "Sous les lumières de la nuit, un résultat magique.",
      halo: "shadow-[0_0_25px_5px_rgba(255,20,147,0.6)]",
    },
    {
      key: "vegas",
      title: "Victoire à Las Vegas 🇺🇸",
      quote: "Première victoire en carrière, un rêve devenu réalité.",
      halo: "shadow-[0_0_25px_5px_rgba(255,223,0,0.8)]",
    },
  ];

  return (
    <section className="py-20 bg-athena-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-athena-gold mb-10">
          🏁 Saison 2025 : L’éveil d’Athéna
        </h2>

        <p className="italic text-lg text-athena-rose mb-12">
          « Elle a changé le visage du paddock et prouvé que la grâce pouvait être une arme. » —{" "}
          <span className="text-white">Autosport, fin 2025</span>
        </p>

        {/* 🏆 MOMENTS DE LA SAISON */}
        <div className="space-y-16">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg border border-athena-gold/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* IMAGE DE FOND */}
              <motion.img
                src={`/moments2025/${index + 1}.jpg`}
                alt={moment.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/50"></div>

              {/* CONTENU */}
              <div className="relative p-8">
                <h3 className="text-2xl font-semibold text-athena-gold mb-2">
                  {moment.title}
                </h3>
                <p className="italic text-athena-rose text-lg mb-6">
                  {moment.quote}
                </p>

                {/* PODIUM */}
                <div className="flex items-end justify-center gap-6 mt-8">
                  {/* P2 */}
                  <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                    <img
                      src={`/podiums2025/${moment.key}_p2.png`}
                      alt="P2"
                      className="w-16 h-16 rounded-full border-2 border-silver object-cover shadow-md"
                    />
                    <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-t-md mt-2">
                      P2
                    </div>
                  </motion.div>

                  {/* P1 */}
                  <motion.div
                    className={`flex flex-col items-center ${moment.halo}`}
                    whileHover={{ scale: 1.15 }}
                  >
                    <img
                      src={`/podiums2025/${moment.key}_p1.png`}
                      alt="P1"
                      className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover shadow-lg"
                    />
                    <div className="bg-yellow-700 text-white text-xs px-3 py-1 rounded-t-md mt-2 font-semibold">
                      🥇 P1
                    </div>
                  </motion.div>

                  {/* P3 */}
                  <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
                    <img
                      src={`/podiums2025/${moment.key}_p3.png`}
                      alt="P3"
                      className="w-14 h-14 rounded-full border-2 border-orange-500 object-cover shadow-md"
                    />
                    <div className="bg-orange-800 text-white text-xs px-2 py-1 rounded-t-md mt-2">
                      P3
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 📊 STATISTIQUES RAPIDES */}
        <div className="mt-20 grid grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-athena-gold text-3xl font-bold">5 🏆</h4>
            <p className="text-athena-rose">Podiums</p>
          </div>
          <div>
            <h4 className="text-athena-gold text-3xl font-bold">1 🥇</h4>
            <p className="text-athena-rose">Victoire</p>
          </div>
          <div>
            <h4 className="text-athena-gold text-3xl font-bold">0 🎯</h4>
            <p className="text-athena-rose">Pole Positions</p>
          </div>
        </div>

        {/* 🖼️ IMAGES CLASSEMENT / RESULTATS / STATS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="/saison2025/classement.jpg"
              alt="Classement Pilotes 2025"
              className="rounded-lg shadow-md border border-athena-gold/30 mx-auto"
            />
            <p className="mt-2 text-athena-gold font-semibold">Classement Pilotes 2025</p>
          </div>

          <div>
            <img
              src="/saison2025/resultats.jpg"
              alt="Résultats de la Saison"
              className="rounded-lg shadow-md border border-athena-gold/30 mx-auto"
            />
            <p className="mt-2 text-athena-gold font-semibold">Résultats de la Saison</p>
          </div>

          <div>
            <img
              src="/saison2025/stats.jpg"
              alt="Statistiques du Pilote"
              className="rounded-lg shadow-md border border-athena-gold/30 mx-auto"
            />
            <p className="mt-2 text-athena-gold font-semibold">Statistiques du Pilote</p>
          </div>
        </div>

        {/* 📖 RÉSUMÉ NARRATIF */}
        <motion.div
          className="mt-24 p-8 border border-athena-gold/40 rounded-2xl bg-black/40 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-athena-gold mb-6">
            📖 Résumé de la Saison 2025
          </h3>

          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            C’était une saison que personne n’oubliera. Celle où une rookie italienne a changé le visage de la Formule 1.
            Dès le premier week-end à <span className="text-athena-gold">Melbourne</span>, Serena Salvini s’est imposée comme une révélation.
            P5 en qualifications, P5 en course — la jeune pilote Alpine a immédiatement prouvé qu’elle n’était pas là pour apprendre, mais pour se battre.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            En <span className="text-athena-gold">Chine</span> et au <span className="text-athena-gold">Japon</span>, elle a confirmé sa régularité, avant un coup d’éclat à
            <span className="text-athena-gold"> Bahreïn</span> (P4). Malgré des abandons à Jeddah et Miami, 
            <span className="text-athena-rose"> Monaco </span> restera le déclic : sous la pluie, elle signe un podium historique — 
            le premier d’une femme depuis des décennies.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Après <span className="text-athena-gold">Montréal</span>, <span className="text-athena-gold">Spa</span> et <span className="text-athena-gold">Singapour</span>,
            elle atteint l’apothéose à <span className="text-athena-gold">Las Vegas</span> : première victoire de sa carrière, première victoire d’une femme en F1 moderne.
            Sous les lumières du Strip, Athéna triomphe.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Avec <span className="text-athena-gold">5 podiums</span>, <span className="text-athena-gold">1 victoire</span> et <span className="text-athena-gold">172 points</span>,
            Serena Salvini conclut sa saison rookie à la 6e place du championnat.  
            Une performance légendaire qui dépasse les chiffres.
          </p>

          <p className="italic text-athena-rose text-center mt-6 text-lg">
            « Elle n’a pas seulement marqué des points.  
            Elle a marqué une génération. » — F1 Chronicle, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Season2025;
