import { SelectedPage } from "@c/shared/types";
import useMediaQuery from "@h/useMediaQuery";
import LogoPane from "./LogoPane";
import PageLinks from "./PageLinks";
import MobileMenu from "./MobileMenu";
import { Outlet } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1240px)");
  const navbarBackground = isTopOfPage
    ? "border-transparent border"
    : "shadow-lg border border-solid border-cardColor bg-cardColor/60 backdrop-blur";

  return (
    <>
      <nav>
        {/* Global Position */}
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          {/* Aligning towards center */}
          <div
            className={`transition delay-150 ${navbarBackground} flex justify-center gap-1 rounded-xl px-3 py-3 ${flexBetween} mx-auto w-3/4`}
          >
            {/* Aligning depending screen size */}
            <div className={` ${flexBetween} w-full gap-10`}>
              {/* Left Side */}
              <LogoPane selectedPage={selectedPage} />
              {/* Right Side */}
              {isAboveMediumScreens ? (
                <PageLinks selectedPage={selectedPage} />
              ) : (
                <MobileMenu selectedPage={selectedPage} />
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
