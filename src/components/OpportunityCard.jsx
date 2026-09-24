export default function OpportunityCard({ opportunity, onViewDetails }) {
  const ACCENT_COLORS = {
    creative: "#C9A84C",
    "digital-technology": "#38BDF8",
    "talent-development": "#A78BFA",
    business: "#34D399",
    community: "#FB923C",
    "social-impact": "#F472B6",
  };

  const accent = ACCENT_COLORS[opportunity.category] || "#C9A84C";

  return (
    <article className="group relative flex min-h-82.5 flex-col p-4 rounded-2xl border border-white/8 bg-white/2.5 hover:bg-white/6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ color: accent, backgroundColor: `${accent}15` }}
        >
          {opportunity.categoryLabel}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-[25px] mb-2 leading-snug group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-serif)" }} > 
        {opportunity.title}
      </h3>

      {/* Description */}
      <p className="text-white/45 text-md leading-relaxed mb-4 grow cursor-pointer group-hover:text-white/70 transition-colors">
        {opportunity.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {opportunity.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded border border-white/10 text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => onViewDetails(opportunity)}
        className="w-full py-2.5 rounded-xl border border-white/12 text-black text-sm font-semibold hover:border-white/25 transition-all duration-200 group-hover:border-white/20" style={{ backgroundColor: accent }}
      >
        Lihat Detail →
      </button>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}40, transparent)`,
        }}
      />
    </article>
  );
}
