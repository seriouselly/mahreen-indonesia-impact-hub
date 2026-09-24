import { useState, useEffect } from "react";
import mahreenLogo from "../assets/mahreen-logo.webp";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Jelajahi", href: "#explore" },
  { label: "Jalur Dampak", href: "#impact-path" },
  { label: "Peluang", href: "#opportunities" },
  { label: "Perjalanan", href: "#impact-journey" },
  // { label: "Tentang", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/8 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-container">
        <div className="flex items-center justify-between w-full h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src={mahreenLogo}
              alt="Mahreen Indonesia"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-lg font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#FinalCTA"
              onClick={(e) => handleNavClick(e, "#FinalCTA")}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-[#c9a84c] text-[#0a0a0b] hover:bg-[#d4b560] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Berikan Dampakmu
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-md hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-white/80 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/80 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/80 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0b]/95 backdrop-blur-md border-t border-white/8 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#impact-path"
            onClick={(e) => handleNavClick(e, "#impact-path")}
            className="mt-2 px-5 py-3 text-sm font-semibold text-center rounded-full bg-[#c9a84c] text-[#0a0a0b] hover:bg-[#d4b560] transition-colors"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </header>
  );
}
