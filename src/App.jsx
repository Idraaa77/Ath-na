import { motion } from "framer-motion";
import "./index.css";
import Hero from "./Hero";
import Season2025 from "./Season2025";
import Season2026 from "./Season2026";

function App() {
  return (
    <div className="bg-athena-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-athena-black/80 backdrop-blur-md z-50 border-b border-athena-gold">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-athena-gold tracking-wide">
            ATHÉNA — La Révolution Féminine de la F1
          </h1>
          <ul className="hidden md:flex gap-6 text-sm">
            <li className="hover:text-athena-gold transition"><a href="#home">Accueil</a></li>
            <li className="hover:text-athena-gold transition"><a href="#preface">Préface</a></li>
            <li className="hover:text-athena-gold transition"><a href="#profil">Profil Pilote</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO / PHOTO ACCUEIL */}
      <section id="home">
        <Hero />
      </section>

      {/* Préface */}
      <section id="preface" className="py-24 px-8 md:px-32 bg-athena-black text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-athena-gold mb-8 text-center">
          Préface — Ce que cette révolution signifie pour moi
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <p>Je n'ai jamais rêvé d'être une héroïne. J'ai rêvé d'être rapide.</p>
          <p>De ressentir le souffle du vent, le rugissement du moteur, la ligne blanche qui défile jusqu'à s'effacer.</p>
          <p>On m’a souvent dit que je n’étais pas à ma place. Trop jeune, trop libre, trop féminine, trop différente. Alors j’ai appris à transformer chaque « trop » en essence.</p>
          <p>Oui, j’ai été punie pour avoir parlé. Oui, on m’a bridée, humiliée, sanctionnée. Mais à chaque fois qu’ils ont tenté de me ralentir, j’ai trouvé un nouveau moyen d’accélérer.</p>
          <p>Athéna, ce n’est pas un surnom. C’est un cri. Celui d’une génération qui veut exister sans s’excuser.</p>
          <p>Aujourd’hui, je cours pour moi, mais aussi pour elles. Pour Callie, pour celles qui rêvent encore derrière un écran, pour celles qui ont cru que la F1 ne leur appartenait pas.</p>
          <p>Je veux que ma vitesse soit un miroir : qu’elles y voient non pas une exception, mais une possibilité.</p>
          <p className="text-right italic text-athena-rose mt-8">— Serena 💫</p>
        </motion.div>
      </section>

      {/* Profil Pilote */}
      <section id="profil" className="py-24 px-8 md:px-32 bg-athena-blue/10 text-center">
        <h2 className="text-3xl font-bold text-athena-gold mb-10">Profil Pilote</h2>
        <motion.div
          className="max-w-3xl mx-auto bg-athena-black/70 border border-athena-gold rounded-2xl shadow-lg p-8 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p><strong>Nom complet :</strong> Serena Salvini</p>
          <p><strong>Nationalité :</strong> Italienne 🇮🇹</p>
          <p><strong>Âge :</strong> 18 ans</p>
          <p><strong>Écurie :</strong> BWT Alpine F1 Team</p>
          <p><strong>Numéro :</strong> 15</p>
          <p><strong>Style de pilotage :</strong> Agressif, précis, émotionnel</p>
          <p><strong>Résultats globaux :</strong> 5 victoires · 13 podiums · 4 poles · 6 meilleurs tours · 411 points</p>
          <p className="italic text-athena-rose mt-6">
            « Athéna a ouvert la voie. Et derrière elle, une génération court déjà. »
          </p>
        </motion.div>
      </section>

      {/* Saisons */}
      <Season2025 />
      <Season2026 />

      {/* Footer */}
      <footer className="py-6 text-center border-t border-athena-gold bg-athena-black/90">
        <p className="text-athena-gold text-sm">
          © 2026 Serena Salvini — BWT Alpine F1 Team — Dior — Louboutin — Sephora — TAG Heuer
        </p>
      </footer>
    </div>
  );
}

export default App;
