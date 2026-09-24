import { useEffect, useRef } from "react";

const ACCENT_COLORS = {
  creative: "#c9a84c",
  "digital-technology": "#38bdf8",
  "talent-development": "#a78bfa",
  business: "#34d399",
  community: "#fb923c",
  "social-impact": "#f472b6",
};

export default function OpportunityModal({ opportunity, onClose }) {
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!opportunity) return null;

  const accent = ACCENT_COLORS[opportunity.category] || "#c9a84c";

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={opportunity.title}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#111113] shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto"
        style={{ animationDuration: "0.3s" }}
      >
        {/* Top accent border */}
        <div
          className="h-px rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`,
          }}
        />

        <div className="p-7 md:p-8">
          {/* Close button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
            aria-label="Tutup"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2L12 12M12 2L2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Category badge */}
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
            style={{ color: accent, backgroundColor: `${accent}15` }}
          >
            {opportunity.categoryLabel}
          </span>

          {/* Title */}
          <h2
            className="font-serif text-2xl md:text-4xl font-light text-white mb-3 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {opportunity.title}
          </h2>

          {/* Description */}
          <p className="text-white/55 text-md leading-relaxed mb-6">
            {opportunity.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {opportunity.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded border border-white/10 text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Learn */}
          <div className="mb-8">
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: accent }}
            >
              Yang Bisa Kamu Pelajari
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              {opportunity.learn}
            </p>
          </div>

          {/* Contribute */}
          <div className="mb-8">
            <h3
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: accent }}
            >
              Yang Bisa Kamu Kontribusikan
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              {opportunity.contribute}
            </p>
          </div>

          {/* Prototype notice */}
          <p className="text-white/20 text-[11px] italic mb-5">
            * Ini adalah konten prototipe/demo, bukan program resmi Mahreen yang
            sedang berjalan.
          </p>

          {/* CTA */}
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95"
            style={{ backgroundColor: accent, color: "#0a0a0b" }}
          >
            ↻ Kembali Menjelajah
          </button>
        </div>
      </div>
    </div>
  );
}
