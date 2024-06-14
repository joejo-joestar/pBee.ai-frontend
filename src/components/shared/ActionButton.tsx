import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  size: string;
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ size, children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${size} flex flex-col justify-center items-center gap-1 rounded-xl bg-gradient-to-b from-[#4d3fb0] to-[#7063cb] border-2 border-solid border-[#aaa1e2] hover:bg-text100`}
      onClick={() => setSelectedPage(SelectedPage.Pricing)}
      href={`#${SelectedPage.Pricing}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
