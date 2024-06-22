import logo from "@a/Logo44.svg";
import { SelectedPage } from "@c/shared/types";

type Props = {
  selectedPage: SelectedPage;
};

const flexBetween = "flex items-center justify-between";

const Logo = ({ selectedPage }: Props) => {
  return (
    <div className={`${flexBetween} gap-2 text-3xl font-medium`}>
      <img alt="Logo" src={logo} />
      <a
        className={`${selectedPage === SelectedPage.Placard ? "text-lavender70" : ""} select-none transition duration-500 hover:text-lavender70`}
        href="/"
      >
        Placard
      </a>
    </div>
  );
};

export default Logo;
