import { SelectedPage } from "@/components/shared/types";
import Footer from '@/components/footer1';
import Navbar from "@/components/navbar1";
import AboutUs from "@/pages/Home/AboutUs";
import CTA from "@/pages/Home/CTA";
import Features from "@/pages/Home/Features";
import Hero from "@/pages/Home/Hero";
import HeroCont from "@/pages/Home/Hero/HeroCont";
import Testimonials from "@/pages/Home/Testimonials";
import FAQs from "@/pages/Home/FAQs";
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
