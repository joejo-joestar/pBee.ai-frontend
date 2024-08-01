// TODO: Split File

import MainHeaderText from "@/components/shared/MainHText";
import MoreInfo from "./MoreInfo";
import { SelectedPage } from "@/components/shared/types";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

type Props = {};

const Team = ({}: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Team,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Team);
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
      <section
        id="Team"
        className="h-full select-none place-content-center gap-16 bg-moreAboutUsGradient py-10 font-display"
      >
        <div className="mt-40 p-8 text-center">
          <MainHeaderText>About Us</MainHeaderText>
          <p className="mt-5 font-body text-2xl">
            Our goal is to make powerful marketing tools accessible <br /> and
            easy to use for businesses.
          </p>
        </div>
        <div className="ml-[230px] flex w-1/2 flex-col p-16">
          <h1 className="text-display text-4xl font-bold">
            Simplifying technology to the world by providing a one-stop digital
            ecosystem
          </h1>
          {/* <p className="mt-3 pr-5 text-justify font-body text-lg"> */}
          {/* </p> */}
        </div>
        <MoreInfo />
      </section>
    </>
  );
};

export default Team;
