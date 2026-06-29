export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-400">
          Piyush.
        </h1>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}