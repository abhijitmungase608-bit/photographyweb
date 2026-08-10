export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold tracking-[0.3em] text-brand-gold">RITESH</div>
        <div className="flex gap-6 text-sm uppercase tracking-[0.25em] text-gray-300">
          <a href="#stories" className="hover:text-brand-gold">Stories</a>
          <a href="#films" className="hover:text-brand-gold">Films</a>
          <a href="#about" className="hover:text-brand-gold">About</a>
          <a href="#contact" className="hover:text-brand-gold">Contact</a>
        </div>
      </div>
    </nav>
  );
}
