import { SelectedPage } from "@/components/shared/types";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/pages/Home/AboutUs";
import CTA from "@/pages/Home/CTA";
import Features from "@/pages/Home/Features";
import Hero from "@/pages/Home/Hero";
import HeroCont from "@/pages/Home/Hero/HeroCont";
import Testimonials from "@/pages/Home/Testimonials";
import FAQs from "@/pages/Home/FAQs";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Home = ({}: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Placard,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1240px)");

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

  return isAboveMediumScreens ? (
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
  ) : (
    <div className="flex h-full select-none flex-col place-content-center items-center justify-center gap-16 bg-ctaGradient p-10 text-center font-display text-2xl font-black opacity-75">
      <img src="public/pixels.jpg" alt="nuh uh" className="max-w-xs" />
      This website is only available on desktop screens.
      <br />I have a life of some sort :3
    </div>
  );
};

export default Home;
