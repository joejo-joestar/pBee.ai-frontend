import { useEffect, useState } from "react";
import Navbar from "@c/navbar";
import { SelectedPage } from "@c/shared/types";
import Home from "@p/Home";
import Features from "@p/Features";
import Testimonials from "@p/Testimonials";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Placard
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
      <Home setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
