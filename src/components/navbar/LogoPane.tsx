import logo from "@a/Logo.svg";
import Links from "./Links";
import { SelectedPage } from "@c/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const flexBetween = "flex items-center justify-between";

const Logo = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${flexBetween} gap-2 text-3xl font-medium`}>
      <img alt="Logo" src={logo} />
      <Links
        page="Placard"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Logo;
