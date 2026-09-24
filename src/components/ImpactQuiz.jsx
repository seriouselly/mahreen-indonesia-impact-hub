import { useState, useRef, useEffect } from "react";
import { QUIZ_QUESTIONS, CATEGORIES } from "../data/opportunities";

const RESULT_DESCRIPTIONS = {
  creative:
    "Ruang untuk mengubah ide menjadi karya. Kamu adalah storyteller. Ekspresikan dirimu melalui desain, konten, dan seni.",
  "digital-technology":
    "Ruang untuk membangun masa depan digital. Kamu adalah builder. Ciptakan solusi lewat kode, data, dan inovasi.",
  "talent-development":
    "Ruang untuk tumbuh dan berkembang. Kamu adalah learner. Capai potensi terbaikmu lewat mentorship dan pengembangan diri.",
  business:
    "Ruang untuk mengubah ide menjadi peluang. Kamu adalah creator. Bangun sesuatu yang bernilai dan berkelanjutan.",
  community:
    "Ruang untuk berkolaborasi dan tumbuh bersama. Kamu adalah connector. Hubungkan orang-orang untuk menciptakan dampak kolektif.",
  "social-impact":
    "Ruang untuk menciptakan perubahan nyata. Kamu adalah changemaker. Beri manfaat nyata bagi masyarakat sekitarmu.",
};

export default function ImpactQuiz({ setActiveCategory }) {
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = result
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [animating, setAnimating] = useState(false);
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getResult = () => {
    const counts = {};
    answers.forEach((a) => {
      counts[a] = (counts[a] || 0) + 1;
    });
    return (
      Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "creative"
    );
  };

  const resultCategory = step === 5 ? getResult() : null;
  const resultCategoryData = resultCategory
    ? CATEGORIES.find((c) => c.id === resultCategory)
    : null;

  const handleSelect = (value) => setSelectedOption(value);

  const handleNext = () => {
    if (!selectedOption) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      setSelectedOption(null);
      setStep((s) => s + 1);
      setAnimating(false);
    }, 220);
  };

  const handleBack = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnswers((a) => a.slice(0, -1));
      setSelectedOption(null);
      setStep((s) => s - 1);
      setAnimating(false);
    }, 220);
  };

  const handleRestart = () => {
    setAnswers([]);
    setSelectedOption(null);
    setStep(1);
  };

  const handleExploreOpportunities = () => {
    if (resultCategory) {
      setActiveCategory(resultCategory);
      const el = document.querySelector("#opportunities");
      if (el) {
        const offset = 72;
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[step - 1];
  const isQuestion = step >= 1 && step <= 4;
  const progress = isQuestion
    ? ((step - 1) / QUIZ_QUESTIONS.length) * 100
    : step === 5
      ? 100
      : 0;

  return (
    <section id="impact-path" ref={sectionRef} className="relative py-24 px-4">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-transparent to-white/8" />

      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="reveal text-[#38bdf8] text-md font-medium tracking-widest uppercase mb-4">
            Temukan Jalur Dampakmu
          </p>
          <h2 className="reveal font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white leading-tight mb-4">
            Yang Mana yang Cocok untukmu?
          </h2>
          <p className="reveal text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Belum tahu harus mulai dari mana? Jawab beberapa pertanyaan
            sederhana dan temukan ruang yang bisa kamu eksplorasi.
          </p>
        </div>

        {/* Quiz card */}
        <div className="reveal border border-white/10 rounded-2xl bg-[#111113]/80 shadow-[0_24px_80px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Progress bar */}
          {(isQuestion || step === 5) && (
            <div className="h-px bg-white/8">
              <div
                className="h-full bg-linear-to-r from-[#38bdf8] to-[#c9a84c] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <div
            className={`p-8 md:p-10 transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}
          >
            {/* ── INTRO ── */}
            {step === 0 && (
              <div className="text-center py-4">
                <div className="text-4xl mb-6">◎</div>
                <h3
                  className="font-serif text-4xl text-white mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Siap Menemukan Ruangmu?
                </h3>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  4 pertanyaan sederhana. Tidak ada jawaban salah.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-3 rounded-full bg-[#c9a84c] text-[#0a0a0b] text-sm font-semibold hover:bg-[#d4b560] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Mulai Quiz
                </button>
              </div>
            )}

            {/* ── QUESTION ── */}
            {isQuestion && currentQuestion && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-white/30 text-md font-medium tracking-widest uppercase">
                    Pertanyaan {step} dari {QUIZ_QUESTIONS.length}
                  </span>
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="text-white/30 hover:text-white/60 text-md transition-colors flex items-center gap-2"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 6H2M2 6L5.5 2.5M2 6L5.5 9.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Kembali
                    </button>
                  )}
                </div>

                <h3
                  className="font-serif text-2xl md:text-3xl text-white mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {currentQuestion.question}
                </h3>

                <div className="grid grid-cols-1 gap-2.5 mb-8">
                  {currentQuestion.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full text-left px-4 py-3.5 rounded-lg border text-md transition-all duration-200 ${
                        selectedOption === opt.value
                          ? "border-[#c9a84c] bg-[#c9a84c]/10 text-white"
                          : "border-white/8 bg-white/2 text-white/60 hover:border-white/20 hover:text-white hover:bg-white/4"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-all duration-200 ${
                            selectedOption === opt.value
                              ? "border-[#c9a84c] bg-[#c9a84c]"
                              : "border-white/20"
                          }`}
                        >
                          {selectedOption === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-[#0a0a0b]" />
                          )}
                        </div>
                        {opt.label}
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="w-full py-3 rounded-full text-md font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed bg-[#c9a84c] text-[#0a0a0b] hover:bg-[#d4b560] hover:scale-[1.02] active:scale-95"
                >
                  {step === QUIZ_QUESTIONS.length
                    ? "Lihat Hasilku →"
                    : "Lanjut →"}
                </button>
              </div>
            )}

            {/* ── RESULT ── */}
            {step === 5 && resultCategoryData && (
              <div className="text-center py-4">
                <p className="text-white/40 text-md font-medium tracking-widest uppercase mb-4">
                  Hasil Quiz
                </p>
                <div
                  className="text-3xl mb-3"
                  style={{ color: resultCategoryData.accent }}
                  aria-hidden="true"
                >
                  {resultCategoryData.icon}
                </div>
                <h3
                  className="font-serif text-3xl md:text-4xl font-light text-white mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: resultCategoryData.accent,
                  }}
                >
                  {resultCategoryData.label}
                </h3>
                <p className="text-white/55 text-md leading-relaxed mb-8 max-w-sm mx-auto">
                  {RESULT_DESCRIPTIONS[resultCategory]}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleExploreOpportunities}
                    className="px-7 py-3 rounded-full text-md font-semibold bg-[#c9a84c] text-[#0a0a0b] hover:bg-[#d4b560] hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    ↪ Jelajahi Peluang
                  </button>
                  <button
                    onClick={handleRestart}
                    className="px-7 py-3 rounded-full text-md font-medium border border-white/15 text-white/50 hover:border-white/30 hover:text-white transition-all duration-200"
                  >
                    ↻ Coba Lagi
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
