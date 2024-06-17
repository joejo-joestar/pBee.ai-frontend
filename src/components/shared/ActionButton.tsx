import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  style: string;
  children: React.ReactNode;
  page: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ style, children, page, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${style} flex flex-col justify-center items-center gap-1 rounded-xl bg-gradient-to-b from-[#4d3fb0] to-[#7063cb] border-2 border-solid border-[#aaa1e2] hover:bg-text100`}
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
