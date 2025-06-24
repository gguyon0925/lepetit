import Header from "./components/Header";
import Hero from "./components/Hero";

// Variation 1 - Minimal & Clean
import HeaderMinimal from "./components/HeaderMinimal";
import HeroMinimal from "./components/HeroMinimal";

// Variation 2 - Luxury Editorial
import HeaderLuxury from "./components/HeaderLuxury";
import HeroLuxury from "./components/HeroLuxury";

// Variation 3 - Elegant Split-Screen
import HeaderElegant from "./components/HeaderElegant";
import HeroElegant from "./components/HeroElegant";

// Variation 4 - Premium Asymmetric
import HeaderPremium from "./components/HeaderPremium";
import HeroPremium from "./components/HeroPremium";

import Values from "./components/Values";
import Showcase from "./components/Showcase";
import Story from "./components/Story";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* CURRENT DESIGN */}
      {/* <Header /> */}
      <main>
        {/* <Hero /> */}

        {/* VARIATION 1 - MINIMAL & CLEAN */}
        {/* Elegant minimalist design with centered logo, subtle menu, and large typography */}
        {/* <HeaderMinimal />
        <HeroMinimal /> */}

        {/* VARIATION 2 - LUXURY EDITORIAL */}
        {/* Split navigation, typographic logo, image carousel, premium feel */}
        {/* <HeaderLuxury />
        <HeroLuxury /> */}

        {/* VARIATION 3 - ELEGANT SPLIT-SCREEN */}
        {/* Floating nav with numbered items, founder story focus, sophisticated image grid */}
        {/* <HeaderElegant />
        <HeroElegant /> */}

        {/* VARIATION 4 - PREMIUM ASYMMETRIC */}
        {/* Hexagon logo symbol, slide-out menu, product showcase, asymmetric image layout */}
        <HeaderPremium />
        <HeroPremium />

        <Values />
        <Showcase />
        <Story />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
