import Links from "./Links";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
};

const QuickLinks = ({ style, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links page={"Product"} selectedPage={selectedPage} />
      <a
        className={`${
          selectedPage === "pricing" ? "text-lavender70" : ""
        } transition duration-500 hover:text-lavender70`}
        href="pricing"
      >
        Pricing
      </a>
      <Links page={"Company"} selectedPage={selectedPage} />
      <Links page={"Contact"} selectedPage={selectedPage} />
    </div>
  );
};

export default QuickLinks;
