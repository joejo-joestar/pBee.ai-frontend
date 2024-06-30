import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { SelectedPage } from "@c/shared/types";
import Hero from "@p/Home/Hero";
import HeroCont from "@p/Home/Hero/HeroCont";
import Features from "@p/Home/Features";
import Testimonials from "@p/Home/Testimonials";
import AboutUs from "@p/Home/AboutUs";
import FAQ from "@p/Home/FAQs"; // Import the FAQ component
import CTA from "@p/Home/CTA";
import Footer from "@/components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Placard,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Placard);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-dark h-fit">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <HeroCont />
      <Features setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
