import HeroLuxury from "./components/HeroLuxury";
// Variation 4 - Premium Asymmetric
import HeaderPremium from "./components/HeaderPremium";

import Philosophy from "./components/Philosophy";
import Showcase from "./components/Showcase";
import Story2 from "./components/Story2";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeaderPremium />
      <main>
        <HeroLuxury />
        <Philosophy />
        <Showcase />
        <Story2 />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
