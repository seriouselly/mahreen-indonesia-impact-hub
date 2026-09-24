export default function CategoryCard({ category, onSelect }) {
  return (
    <button
      onClick={() => onSelect(category.id)}
      className="group relative text-left w-full min-h-full p-4 rounded-2xl border border-white/8 bg-white/2.5 hover:bg-white/6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
      aria-label={`Explore ${category.label}`}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at top left, ${category.accent}0a 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="text-4xl mb-4 transition-transform duration-300"
        style={{ color: category.accent }}
        aria-hidden="true"
      >
        {category.icon}
      </div>

      {/* Category name */}
      <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-white transition-colors">
        {category.label}
      </h3>

      {/* Description */}
      <p className="text-white/45 text-base leading-relaxed mb-4">
        {category.description}
      </p>

      {/* Explore indicator */}
      <div
        className="flex items-center gap-2 text-md font-medium transition-all duration-300 group-hover:gap-5"
        style={{ color: category.accent }}
      >
        <span>Jelajahi</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  );
}
