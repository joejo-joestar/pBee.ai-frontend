import { useEffect, useState } from "react";
import Navbar from "@c/navbar";
import { SelectedPage } from "@c/shared/types";
import MoreAboutUs from "@p/MoreAboutUs";
import Team from "@p/MoreAboutUs/Team";

function AboutUs() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Company,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Pricing);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="AboutUs bg-bgDark100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <MoreAboutUs />
      <Team />
    </div>
  );
}

export default AboutUs;
