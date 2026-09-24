import { useState, useEffect, useRef } from "react";
import { OPPORTUNITIES, CATEGORIES } from "../data/opportunities";
import OpportunityCard from "./OpportunityCard";
import OpportunityModal from "./OpportunityModal";

const ALL_FILTER = { id: "all", label: "All" };
const FILTERS = [
  ALL_FILTER,
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
];

export default function OpportunityFinder({
  activeCategory,
  setActiveCategory,
}) {
  const [search, setSearch] = useState("");
  const [selectedOpp, setSelectedOpp] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentFilter = activeCategory || "all";

  const filtered = OPPORTUNITIES.filter((opp) => {
    const matchCategory =
      currentFilter === "all" || opp.category === currentFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      opp.title.toLowerCase().includes(q) ||
      opp.description.toLowerCase().includes(q) ||
      opp.tags.some((t) => t.toLowerCase().includes(q)) ||
      opp.categoryLabel.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return (
    <section
      id="opportunities"
      ref={sectionRef}
      className="relative py-16 px-4 sm:py-14 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-linear-to-b from-transparent to-white/8" />

      <div className="site-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="reveal text-[#38bdf8] text-md font-medium tracking-widest uppercase mb-4">
            Penemuan Kesempatan
          </p>
          <h2
            className="reveal font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Jelajahi Kesempatan
          </h2>
          <p className="reveal text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Jelajahi berbagai ruang untuk belajar, berkarya, dan terhubung
            dengan ekosistem.
          </p>
        </div>

        {/* Search input */}
        <div className="reveal mb-6 max-w-md mx-auto">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10.5 10.5L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              placeholder="Cari kesempatan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white/80 text-sm placeholder:text-white/25 focus:outline-none focus:border-[#38bdf8]/40 focus:bg-white/5 transition-all duration-200"
              aria-label="Cari kesempatan"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="reveal visible mb-10 flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveCategory(f.id === "all" ? null : f.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                currentFilter === f.id || (f.id === "all" && !activeCategory)
                  ? "border-[#c9a84c] bg-[#c9a84c]/15 text-[#c9a84c]"
                  : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="reveal mb-6 text-white/30 text-xs font-medium tracking-wide">
          {filtered.length}{" "}
          {filtered.length === 1 ? "opportunity" : "opportunities"} ditemukan
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((opp) => (
              <div key={opp.id} className="reveal visible">
                <OpportunityCard
                  opportunity={opp}
                  onViewDetails={setSelectedOpp}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="reveal visible text-center py-20">
            <div className="text-3xl mb-4 text-white/10">◎</div>
            <p className="text-white/30 text-sm">
              Tidak ada opportunity yang cocok.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory(null);
              }}
              className="mt-4 text-[#38bdf8] text-xs hover:underline transition-colors"
            >
              Reset pencarian
            </button>
          </div>
        )}

        {/* Prototype notice */}
        <p className="reveal mt-10 text-center text-white/20 text-[11px] italic">
          * Opportunity di atas adalah konten prototipe/demo untuk keperluan
          internship challenge, bukan program resmi yang sedang berjalan.
        </p>
      </div>

      {/* Modal */}
      {selectedOpp && (
        <OpportunityModal
          opportunity={selectedOpp}
          onClose={() => setSelectedOpp(null)}
        />
      )}
    </section>
  );
}
