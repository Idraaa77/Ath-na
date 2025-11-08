import React from "react";
import { motion } from "framer-motion";

const Sponsors = () => {
  const sponsors = [
    {
      name: "BWT Alpine F1 Team",
      logo: "/sponsors/alpine.png",
      url: "https://www.alpinecars.com/",
    },
    {
      name: "Pirelli",
      logo: "/sponsors/pirelli.png",
      url: "https://www.pirelli.com/",
    },
    {
      name: "TAG Heuer",
      logo: "/sponsors/tagheuer.png",
      url: "https://www.tagheuer.com/",
    },
    {
      name: "Dior",
      logo: "/sponsors/dior.png",
      url: "https://www.dior.com/",
    },
    {
      name: "Sephora",
      logo: "/sponsors/sephora.png",
      url: "https://www.sephora.fr/",
    },
    {
      name: "Christian Louboutin",
      logo: "/sponsors/louboutin.png",
      url: "https://eu.christianlouboutin.com/",
    },
    {
      name: "Naked Wolfe",
      logo: "/sponsors/nakedwolfe.png",
      url: "https://www.nakedwolfe.com/",
    },
  ];

  return (
    <section className="py-20 bg-athena-black text-white text-center">
      <h2 className="text-4xl font-bold text-athena-gold mb-12">
        🤝 Partenaires Officiels
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-3 opacity-90 hover:opacity-100"
            />
            <p className="text-athena-gold font-semibold text-sm">{sponsor.name}</p>
          </motion.a>
        ))}
      </div>

      <p className="text-gray-400 text-sm mt-10 italic">
        “Chaque partenaire incarne une part du style, de la précision et de la force d’Athéna.”
      </p>
    </section>
  );
};

export default Sponsors;
