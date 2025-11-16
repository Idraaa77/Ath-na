export default function Navbar() {
  return (
<header className="fixed top-0 left-0 w-full z-50 bg-[#111]/95 backdrop-blur border-b border-[#a67c00]/40 shadow-md">
  <nav className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-10 py-3">
    {/* Titre */}
    <h1 className="text-[#d4af37] font-semibold tracking-wide text-sm sm:text-base text-center sm:text-left leading-snug">
      ATHÉNA —{" "}
      <span className="text-[#f5d88c]">La Révolution Féminine de la F1</span>
    </h1>

    {/* Liens */}
    <ul className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5 text-[11px] sm:text-[14px] text-[#f8f8f8] font-light">
      <li><a href="#home" className="hover:text-[#d4af37] transition">Accueil</a></li>
      <li><a href="#profil" className="hover:text-[#d4af37] transition">Profil</a></li>
      <li><a href="#career" className="hover:text-[#d4af37] transition">Carrière</a></li>
      <li><a href="#season2025" className="hover:text-[#d4af37] transition">Saison 2025</a></li>
      <li><a href="#season2026" className="hover:text-[#d4af37] transition">Saison 2026</a></li>
      <li><a href="#season2027" className="hover:text-[#d4af37] transition">Saison 2027</a></li>
      <li><a href="#palmares" className="hover:text-[#d4af37] transition">Palmarès</a></li>
      <li><a href="#stats" className="hover:text-[#d4af37] transition">Stats</a></li>
      <li><a href="#press" className="hover:text-[#d4af37] transition">Presse</a></li>
    </ul>
  </nav>
</header>

  );
}
