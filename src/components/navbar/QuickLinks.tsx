import Links from "./Links";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const QuickLinks = ({ style, selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links
        page={"Product"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page={"Pricing"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page={"Company"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page={"Contact"}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default QuickLinks;
