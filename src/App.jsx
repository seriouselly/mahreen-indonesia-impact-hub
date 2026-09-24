import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EcosystemSection from "./components/EcosystemSection";
import ImpactQuiz from "./components/ImpactQuiz";
import OpportunityFinder from "./components/OpportunityFinder";
import ImpactJourney from "./components/ImpactJourney";
// import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EcosystemSection setActiveCategory={setActiveCategory} />
        <ImpactQuiz setActiveCategory={setActiveCategory} />
        <OpportunityFinder
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ImpactJourney />
        {/* <About /> */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
