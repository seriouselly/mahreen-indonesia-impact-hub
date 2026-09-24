export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
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
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Decorative thin horizontal line */}
      <div className="absolute top-1/4 left-0 right-0 h-px from-transparent via-white/6 to-transparent" />

      {/* Eyebrow label */}
      <div className="reveal visible mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-medium tracking-widest uppercase">
        <span>✦</span>
        <span>Mahreen Indonesia Impact Hub</span>
        <span>✦</span>
      </div>

      {/* Main headline */}
      <h1
        className="reveal visible font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] font-light tracking-[-0.02em] text-white mb-6"
        style={{ fontFamily: "var(--font-serif)", animationDelay: "0.1s" }}
      >
        BERKARYA
        <br />
        <em className="italic text-[#c9a84c]">UNTUK</em>
        <br />
        INDONESIA
      </h1>

      {/* Sub headline */}
      <p className="reveal visible font-serif text-[clamp(1.1rem,2.5vw,1.6rem)] text-white/50 font-light italic mb-4 max-w-xl">
        "Satu Ide. Satu Karya. Satu Dampak."
      </p>

      {/* Body copy */}
      <p className="reveal visible text-white/50 text-lg max-w-lg leading-relaxed mb-10">
        Temukan ruang untuk belajar, berkarya, berkolaborasi, dan menciptakan
        dampak bersama Mahreen Indonesia.
      </p>

      {/* CTAs */}
      <div
        className="reveal visible flex flex-col sm:flex-row gap-3 items-center"
        style={{ animationDelay: "0.4s" }}
      >
        <button
          onClick={() => handleScroll("#explore")}
          className="px-8 py-3.5 rounded-full bg-[#c9a84c] text-[#0a0a0b] text-lg font-semibold hover:bg-[#d4b560] hover:scale-105 active:scale-95 transition-all duration-200 min-w-[11.25rem]"
        >
          Mulai Jelajahi Dampakmu
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/80 text-md tracking-widest uppercase">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-white/80"
        >
          <path
            d="M8 3L8 13M8 13L4 9M8 13L12 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
