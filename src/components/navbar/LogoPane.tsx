import logo from "@a/Logo44.svg";
import { SelectedPage } from "@c/shared/types";
import { Link } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
};

const flexBetween = "flex items-center justify-between";

const Logo = ({ selectedPage }: Props) => {
  return (
    <div className={`${flexBetween} gap-2 text-3xl font-medium`}>
      <img alt="Logo" src={logo} />
      <Link
        className={`${selectedPage === SelectedPage.Placard ? "text-lavender70" : ""} select-none transition duration-500 hover:text-lavender70`}
        to="/"
      >
        Placard
      </Link>
    </div>
  );
};

export default Logo;
