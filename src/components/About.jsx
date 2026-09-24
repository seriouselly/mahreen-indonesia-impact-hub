import { useEffect, useRef } from "react";

const DOMAINS = [
  { label: "Creativity", icon: "✦", color: "#C9A84C" },
  { label: "Digital Technology", icon: "◈", color: "#38BDf8" },
  { label: "Talent Development", icon: "◉", color: "#A288F1" },
  { label: "Business", icon: "◆", color: "#34D399" },
  { label: "Community", icon: "⬡", color: "#FB923C" },
  { label: "Social Contribution", icon: "◎", color: "#F472B6" },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 90);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-20"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/8" />

      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="reveal text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h2
              className="reveal font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              About Mahreen Indonesia
            </h2>
            <p className="reveal text-white/55 text-base leading-relaxed mb-4">
              Mahreen Indonesia adalah ekosistem yang menghubungkan anak muda
              dengan ruang untuk berkarya, berkembang, dan menciptakan dampak
              nyata.
            </p>
            <p className="reveal text-white/40 text-sm leading-relaxed mb-4">
              Bukan sekadar komunitas, Mahreen hadir sebagai jembatan antara
              potensi individu dengan peluang yang dapat mendorong pertumbuhan —
              secara personal, profesional, maupun sosial.
            </p>
            <p className="reveal text-white/40 text-sm leading-relaxed">
              Di sini, satu ide bisa menjadi karya. Satu karya bisa menjadi
              langkah pertama menuju dampak yang sesungguhnya.
            </p>
          </div>

          {/* Right: domain tags */}
          <div>
            <p className="reveal text-white/30 text-xs font-medium tracking-widest uppercase mb-6">
              Ekosistem kami mencakup
            </p>
            <div className="grid grid-cols-2 gap-3">
              {DOMAINS.map((d) => (
                <div
                  key={d.label}
                  className="reveal flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200"
                >
                  <span
                    className="text-lg flex-shrink-0"
                    style={{ color: d.color }}
                    aria-hidden="true"
                  >
                    {d.icon}
                  </span>
                  <span className="text-white/70 text-sm font-medium leading-tight">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
