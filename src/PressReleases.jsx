import React from "react";
import { motion } from "framer-motion";

const articles = [
  // === TES ANCIENS ARTICLES (inchangés, juste chemins images propres) ===
  {
    title: "Serena Salvini signe chez Oracle Red Bull Racing",
    date: "Janvier 2027",
    source: "Motorsport.com",
    excerpt:
      "Après deux saisons explosives chez Alpine, Serena Salvini rejoint Oracle Red Bull Racing. Le paddock parle d’un transfert sismique : la pilote qui défie la FIA rejoint l’équipe qui défie la logique.",
    image: "/press/redbull2027.jpg",
  },
  {
    title: "Vice-championne du monde : Salvini fait vaciller la F1",
    date: "4 décembre 2026",
    source: "BBC Sport",
    excerpt:
      "Cinq victoires, treize podiums, une saison en guerre ouverte avec les instances. Serena Salvini termine vice-championne du monde, mais pour beaucoup, elle est déjà la championne du peuple.",
    image: "/press/vicechamp2026.jpg",
  },
  {
    title: "De la grille au catwalk : Salvini chez Victoria’s Secret",
    date: "Novembre 2026",
    source: "Vogue US",
    excerpt:
      "Casque posé, talons aux pieds. Serena Salvini défile pour Victoria’s Secret, brouillant les frontières entre puissance et sensualité. Une pilote de F1 sur le catwalk : un symbole de nouvelle génération.",
    image: "/press/victoriasecret2026.jpg",
  },
  {
    title: "Serena Salvini — La pluie, la grâce et la victoire",
    date: "26 mai 2025",
    source: "The Race",
    excerpt:
      "Sous la pluie de Monaco, une jeune femme a transformé la peur en symphonie. Serena Salvini n’a pas seulement résisté : elle a redéfini la notion même de contrôle.",
    image: "/press/monaco2025.jpg",
  },
  {
    title: "Vegas 2025 — L’histoire s’écrit en or",
    date: "17 novembre 2025",
    source: "L'Équipe",
    excerpt:
      "Sous les lumières de Las Vegas, Athéna a pris le monde à témoin. La première victoire féminine de l’histoire moderne de la F1. Une page d’histoire dorée à l’or rose.",
    image: "/press/vegas2025.jpg",
  },
  {
    title: "Athéna : la révolution a un visage",
    date: "Décembre 2025",
    source: "Autosport",
    excerpt:
      "Salvini n’est pas une exception : elle est le commencement. Sa victoire est un symbole, sa constance une leçon. La F1 a changé, et elle porte désormais un prénom italien.",
    image: "/press/portrait2025.jpg",
  },
  {
    title: "Serena Salvini x Dior — Quand la vitesse devient couture",
    date: "Février 2026",
    source: "Vogue Paris",
    excerpt:
      "Entre podium et podium, Serena collabore avec Dior pour créer une collection exclusive : lignes pures, matériaux techniques, féminité assumée. L’Athéna Couture est née.",
    image: "/press/dior2026.jpg",
  },
  {
    title: "La rivalité Salvini–Leclerc — Étincelles à venir ?",
    date: "Mars 2026",
    source: "Formula Passion",
    excerpt:
      "Deux talents italiens, deux philosophies. L’un a grandi dans la tradition, l’autre dans la révolte. Quand les feux rouges s’éteignent, il ne reste que la vérité de la piste.",
    image: "/press/duel2026.jpg",
  },

  // === NOUVEAUX ARTICLES LONGS 2027 ===

  {
    title: "Imola 2027 — Le jour où Salvini a brisé le silence",
    date: "Mai 2027",
    source: "The Race — Enquête spéciale",
    excerpt:
      "Le ‘fuel-gate’ restera comme l’un des épisodes les plus tendus de l’histoire récente. Salvini, alors en tête du championnat, voit son podium s’évaporer à cause d’un ‘low fuel’ inexpliqué. Mais au-delà de l’incident, c’est un système entier qu’elle a osé défier. Red Bull vacille. La FIA s’inquiète. Et le paddock découvre une pilote prête à risquer sa carrière pour rétablir la vérité.",
    image: "/press/imola2027.jpg", // à ajouter dans /public/press
  },
  {
    title: "La guerre froide Salvini–FIA : un conflit inévitable",
    date: "Juin 2027",
    source: "Autosport International",
    excerpt:
      "Depuis 2024, la relation Salvini–FIA est une suite de frictions, sanctions controversées, décisions étranges et malentendus politiques. En 2027, la tension atteint son apogée. Salvini ne plie plus. Elle expose. Elle accuse. Elle dérange. Et dans un sport où l’ordre établi prime, voir une pilote contester aussi frontalement l’institution relève de l’histoire.",
    image: "/press/fiawar2027.jpg", // à ajouter
  },
  {
    title: "Red Bull en crise — L’ère Salvini s’achève dans la tempête",
    date: "Août 2027",
    source: "BBC F1 Analysis",
    excerpt:
      "Une fuite interne, une vidéo virale, et une déclaration fracassante : Salvini annonce son départ de Red Bull. Le team autrichien traverse alors sa plus grande crise depuis 2014. Entre tensions internes, gestion médiatique catastrophique et division du staff, l'équipe est forcée de se confronter à une vérité : la pilote qu’ils ont tenté de canaliser est devenue trop grande pour les contenir.",
    image: "/press/redbullcrisis2027.jpg", // à ajouter
  },
  {
    title: "Ferrari ou Mercedes ? Le transfert du siècle",
    date: "Septembre 2027",
    source: "Sky Sports F1 — Dossier spécial",
    excerpt:
      "Jamais un pilote n’a autant bouleversé le marché. Entre la passion rouge de Maranello et la dynastie argentée de Brackley, Serena Salvini devient l’athlète la plus convoitée de l’ère moderne. Les négociations sont secrètes, les rencontres clandestines, les contrats démesurés. Peu importe son choix : 2028 sera façonnée par la volonté de Salvini.",
    image: "/press/transfer2027.jpg", // à ajouter
  },
  {
  title: "Red Bull change de cap : Salvini confie son destin à Amélia Étienne",
  date: "Février 2027",
  source: "Autosport International",
  excerpt:
    "À l’aube de la saison 2027, Serena Salvini opère un changement clé en interne : Amélia Étienne devient sa nouvelle ingénieure de course. Plus qu’un ajustement technique, c’est un choix fondé sur la confiance absolue. Amies de longue date, les deux femmes instaurent une communication directe et sans filtre, transformant immédiatement la dynamique en piste. Ce duo posera les bases d’une saison historique.",
  image: "/press/amelia-engineer-2027.jpg",
},
{
  title: "Championne du monde 2027 : Serena Salvini entre dans l’histoire",
  date: "Décembre 2027",
  source: "L’Équipe",
  excerpt:
    "Neuf victoires, huit poles, 392 points. Mais au-delà des chiffres, c’est la résistance mentale qui impressionne. Entre tensions internes, décisions controversées et deux disqualifications, Serena Salvini n’a jamais cédé. À Abu Dhabi, elle conclut la saison par une pole et une victoire maîtrisée. Première femme championne du monde de Formule 1, elle redéfinit l’histoire du sport.",
  image: "/press/worldchampion-2027.jpg",
},
{
  title: "Deux trophées, une alliance : Salvini et Étienne font des étincelles",
  date: "Décembre 2027",
  source: "BBC Sport",
  excerpt:
    "La scène est forte : Serena Salvini soulève le trophée pilotes, Amélia Étienne celui des constructeurs. Leur alliance, fondée sur une amitié profonde et une confiance totale, a transformé la saison 2027. Dans un paddock sous pression politique constante, elles ont prouvé que la performance naît aussi de la relation humaine.",
  image: "/press/duo-titles-2027.jpg",
},
{
  title: "Serena Salvini signe chez Ferrari : le choix de l’héritage",
  date: "Janvier 2028",
  source: "Sky Sports F1",
  excerpt:
    "Quelques semaines après son sacre mondial, Serena Salvini officialise son départ de Red Bull pour rejoindre la Scuderia Ferrari. Un transfert majeur, symbole d’un nouveau chapitre. À Maranello, elle est accueillie non seulement comme une championne du monde, mais comme la pierre angulaire d’une nouvelle ère.",
  image: "/press/ferrari-signing-2028.jpg",
},

];

const PressReleases = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* EN-TÊTE */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-athena-gold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📰 La Légende Athéna — Dans la presse
        </motion.h2>
        <p className="text-athena-rose italic text-lg">
          “Ce n’est plus une histoire de genre. C’est une histoire de vitesse.”
        </p>
      </div>

      {/* ARTICLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-athena-gold/30 hover:shadow-athena-gold/40 transition-all duration-500 group bg-black/80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="h-80 w-full overflow-hidden">
              <motion.img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
            </div>

            {/* TEXTE */}
            <div className="p-6 bg-black/80 backdrop-blur-sm">
              <p className="text-xs uppercase text-athena-rose mb-2">
                {article.source} — {article.date}
              </p>
              <h3 className="text-xl font-semibold text-athena-gold mb-3">
                {article.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* OVERLAY HOVER */}
            <motion.div
              className="absolute inset-0 bg-athena-gold/0 group-hover:bg-athena-gold/5 transition-all duration-700"
              initial={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Citation finale */}
      <div className="text-center mt-20">
        <motion.p
          className="italic text-athena-rose text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          “Athéna n’écrit pas des communiqués. Elle réécrit l’histoire.” — F1
          Chronicle
        </motion.p>
      </div>
    </section>
  );
};

export default PressReleases;
