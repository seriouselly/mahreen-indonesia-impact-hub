import { useEffect, useRef } from "react";

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const el = document.querySelector("#impact-path");
    if (el) {
      const offset = 72;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="FinalCTA"
      ref={sectionRef}
      className="relative py-25 px-4 text-center overflow-hidden"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-150 h-75 rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, #c9a84c 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent to-white/8" />

      <div className="relative max-w-3xl mx-auto rounded-4xl border border-white/8 bg-white/2.5 px-6 py-14 sm:px-12 sm:py-16 shadow-[0_24px_100px_rgba(0,0,0,0.22)]">
        <p className="reveal text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-6">
          Satu Ide. Satu Karya. Satu Dampak.
        </p>
        <h2
          className="reveal font-serif text-[clamp(2.5rem,8vw,5rem)] font-light text-white leading-[0.95] tracking-[-0.02em] mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Punya Ide
          <br />
          <em style={{ fontStyle: "italic", color: "#c9a84c" }}>
            Untuk Indonesia?
          </em>
        </h2>
        <p className="reveal text-white/45 text-base leading-relaxed max-w-lg mx-auto mb-10">
          Jangan tunggu sampai sempurna. Mulai dari satu ide, satu karya, satu
          langkah.
        </p>
        <div className="reveal">
          <button
            onClick={handleScroll}
            className="px-10 py-4 rounded-full bg-[#c9a84c] text-[#0a0a0b] text-sm font-semibold hover:bg-[#d4b560] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.2)]"
          >
            Mulai Berkarya
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-white/8" />
    </section>
  );
}
