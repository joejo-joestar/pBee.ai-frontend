// TODO: Split File

import MainHeaderText from "@/components/shared/MainHText";
import Card from "./Card";
import Navbar from "@/components/navbar1";
import { SelectedPage } from "@/components/shared/types";
import { useEffect, useState } from "react";

type Props = {};

const Pricing = ({}: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Pricing,
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
      <section
        id="pricing"
        className="select-none place-content-center gap-16 bg-dark py-10"
      >
        <div className="mt-40 flex flex-col p-6 text-center">
          {/* Header */}
          <MainHeaderText>Grow your business today</MainHeaderText>
          <p className="mt-5 text-2xl">
            Choose a plan that works best for you.
          </p>
          {/* Cards */}
          <div className="mt-10 flex flex-row justify-center gap-16">
            <Card
              pricingType={"Starter"}
              price={"5"}
              features={"placeholder"}
              isCustomPrice={false}
            />
            <Card
              pricingType={"Pro"}
              price={"50"}
              features={"placeholder"}
              isCustomPrice={false}
            />
            <Card
              pricingType={"Enterprise"}
              features={"placeholder"}
              isCustomPrice={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
