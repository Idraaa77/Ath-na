export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-neutral-900/90 to-neutral-800/60 backdrop-blur-md border-b border-[#c8a44b]/40 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo / Titre */}
        <h1 className="text-[#d4af37] font-semibold tracking-wide text-sm sm:text-base">
          ATHÉNA — <span className="text-[#f5d88c]">La Révolution Féminine de la F1</span>
        </h1>

        {/* Liens de navigation */}
        <ul className="hidden sm:flex items-center gap-6 text-sm text-white">
          <li>
            <a href="#hero" className="hover:text-[#d4af37] transition duration-200">
              Accueil
            </a>
          </li>
          <li>
            <a href="#preface" className="hover:text-[#d4af37] transition duration-200">
              Préface
            </a>
          </li>
          <li>
            <a href="#profil" className="hover:text-[#d4af37] transition duration-200">
              Profil Pilote
            </a>
          </li>
          <li>
            <a href="#season2025" className="hover:text-[#d4af37] transition duration-200">
              Saison 2025
            </a>
          </li>
          <li>
            <a href="#press" className="hover:text-[#d4af37] transition duration-200">
              Presse
            </a>
          </li>

          {/* ✔ Ajout officiel du lien Palmarès */}
          <li>
            <a href="#palmares" className="hover:text-[#d4af37] transition duration-200">
              Palmarès
            </a>
          </li>

          {/* ✔ Nouveau bouton pour page Stats */}
          <li>
            <a href="/stats" className="hover:text-[#d4af37] transition duration-200">
              Stats
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
