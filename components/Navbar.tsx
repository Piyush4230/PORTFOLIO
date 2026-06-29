"use client";

import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-4">

          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-white"
          >
            Piyush<span className="text-blue-500">.</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            Let's Talk
          </a>

        </div>
      </div>
    </header>
  );
}