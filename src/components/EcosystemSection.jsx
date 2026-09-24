import { useEffect, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../data/opportunities";

export default function EcosystemSection({ setActiveCategory }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (categoryId) => {
    setActiveCategory(categoryId);
    const el = document.querySelector("#opportunities");
    if (el) {
      const offset = 72;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="explore" ref={sectionRef} className="relative py-16 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="reveal text-[#c9a84c] text-md font-medium tracking-widest uppercase mb-4">
            Jelajahi Ekosistem Mahreen Indonesia
          </p>
          <h2 className="reveal font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light text-white leading-tight mb-4">
            Temukan Ruang Berkaryamu
          </h2>
          <p className="reveal text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Setiap orang punya cara berbeda untuk menciptakan dampak. Temukan
            ruang yang paling dekat dengan minatmu.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="reveal">
              <CategoryCard category={cat} onSelect={handleSelect} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
