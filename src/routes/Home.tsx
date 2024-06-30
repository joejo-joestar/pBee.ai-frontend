import { SelectedPage } from "@c/shared/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@p/Home/AboutUs";
import CTA from "@p/Home/CTA";
import Features from "@p/Home/Features";
import Hero from "@p/Home/Hero";
import HeroCont from "@p/Home/Hero/HeroCont";
import Testimonials from "@p/Home/Testimonials";
import FAQs from "@p/Home/FAQs";
import { useEffect, useState } from "react";

type Props = {};

const Home = ({}: Props) => {
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
    <>
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
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
