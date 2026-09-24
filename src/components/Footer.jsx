import mahreenLogo from "../assets/mahreen-logo.webp";

const QUICK_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Jelajahi", href: "#explore" },
  { label: "Jalur Dampak", href: "#impact-path" },
  { label: "Peluang", href: "#opportunities" },
  { label: "Perjalanan", href: "#impact-journey" },
  // { label: "About", href: "#about" },
  { label: "Berikan Dampakmu", href: "#FinalCTA" },
];

// Social placeholder links — not official accounts
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mahreenindonesia/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function handleNavClick(e, href) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offset = 72;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  }
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#0a0a0b]">
      <div className="site-container pt-8 pb-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={mahreenLogo}
              alt="Mahreen Indonesia"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Ekosistem yang menghubungkan anak muda dengan ruang untuk
              berkarya, berkembang, dan menciptakan dampak nyata.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-white/35 hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="text-white/50 text-xs font-extrabold tracking-widest uppercase mb-5">
              Navigasi
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built for context */}
          <div>
            <h3 className="text-white/50 text-xs font-extrabold tracking-widest uppercase mb-5">
              Konteks
            </h3>
            <p className="text-white/30 text-sm leading-relaxed mb-2">
              Dibuat untuk Mahreen Indonesia Internship Batch 2 Creative
              Challenge.
            </p>
            <p className="text-white/20 text-xs leading-relaxed italic">
              Website prototipe — bukan situs resmi Mahreen Indonesia.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Mahreen Indonesia. Berkarya untuk
            Indonesia.
          </p>
          <p className="text-white/15 text-xs italic">
            Mahreen Impact Hub — Internship Challenge Prototype
          </p>
        </div>
      </div>
    </footer>
  );
}
