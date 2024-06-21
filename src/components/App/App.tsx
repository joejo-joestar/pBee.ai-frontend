import { useEffect, useState } from "react";
import Navbar from "@c/navbar";
import { SelectedPage } from "@c/shared/types";
import Hero from "@/pages/Hero";
import Features from "@p/Features";
import Testimonials from "@p/Testimonials";
import AboutUs from "@p/AboutUs";
import FAQ from "@p/FAQs"; // Import the FAQ component
import CTA from "@p/CTA";
import Footer from "@c/footer";

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
    <div className="app bg-bgDark100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <FAQ /> {/* Add the FAQ component */}
      <CTA setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
