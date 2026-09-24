import { useEffect, useRef } from "react";

const STEPS = [
  {
    number: "01",
    label: "Learn",
    title: "Pelajari Hal Bermakna",
    description:
      "Mulai dari rasa ingin tahu. Serap ilmu, dengarkan mentor, dan buka dirimu pada hal-hal baru.",
    icon: "◎",
    accent: "#38BDF8",
  },
  {
    number: "02",
    label: "Create",
    title: "Wujudkan Ideamu",
    description:
      "Ubah apa yang kamu pelajari menjadi sesuatu yang nyata menjadi karya, produk, atau inisiatif.",
    icon: "◆",
    accent: "#C9A84C",
  },
  {
    number: "03",
    label: "Collaborate",
    title: "Tumbuh Bersama",
    description:
      "Karya terbaik lahir dari kolaborasi. Terhubung, berkontribusi, dan belajar dari orang lain.",
    icon: "⬡",
    accent: "#A78BFA",
  },
  {
    number: "04",
    label: "Impact",
    title: "Ciptakan Dampak",
    description:
      "Jadikan karyamu sebagai kontribusi nyata untuk komunitas, industri, dan Indonesia.",
    icon: "✦",
    accent: "#34D399",
  },
];

export default function ImpactJourney() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="impact-journey"
      ref={sectionRef}
      className="relative py-24 px-4 sm:py-28 overflow-hidden cursor-default"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent to-white/8" />

      {/* Faint section background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/1 to-transparent pointer-events-none" />

      <div className="site-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[#c9a84c] text-md font-medium tracking-widest uppercase mb-4">
            Perjalanan dampak
          </p>
          <h2
            className="reveal font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Dari Belajar ke Berkarya, <br />
            Hingga Menciptakan Dampak
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="reveal flex-1 flex flex-col items-center text-center px-6"
            >
              {/* Step circle */}
              <div
                className="relative w-20 h-20 rounded-full border flex items-center justify-center mb-6 z-10 bg-[#0a0a0b] transition-all duration-300"
                style={{ borderColor: `${step.accent}40` }}
              >
                <span
                  className="text-2xl"
                  style={{ color: step.accent }}
                  aria-hidden="true"
                >
                  {step.icon}
                </span>
                {/* Number badge */}
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: step.accent, color: "#0a0a0b" }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Step label */}
              <span
                className="text-sm font-semibold tracking-widest uppercase mb-2"
                style={{ color: step.accent }}
              >
                {step.label}
              </span>

              {/* Title */}
              <h3
                className="font-serif text-2xl font-light text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-md leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex lg:hidden flex-col gap-8 relative">
          {/* Vertical connector */}
          <div className="absolute top-8 bottom-8 left-7 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

          {STEPS.map((step, index) => (
            <div key={step.number} className="reveal flex gap-6 items-start">
              {/* Circle */}
              <div
                className="shrink-0 w-14 h-14 rounded-full border flex items-center justify-center z-10 bg-[#0a0a0b] relative"
                style={{ borderColor: `${step.accent}40` }}
              >
                <span
                  className="text-lg"
                  style={{ color: step.accent }}
                  aria-hidden="true"
                >
                  {step.icon}
                </span>
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: step.accent, color: "#0a0a0b" }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <span
                  className="text-sm font-semibold tracking-widest uppercase mb-1 block"
                  style={{ color: step.accent }}
                >
                  {step.label}
                </span>
                <h3
                  className="font-serif text-2xl font-light text-white mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/40 text-md leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
