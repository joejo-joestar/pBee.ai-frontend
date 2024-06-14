import logo from "@/assets/Logo.svg";
import Link from "./Link";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const flexBetween = "flex items-center justify-between";

const Logo = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${flexBetween} gap-2 text-3xl font-medium`}>
      <img alt="Logo" src={logo} />
      <Link
        page="Placard"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Logo;
