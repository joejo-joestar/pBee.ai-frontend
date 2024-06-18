import { useState } from "react";
import { SelectedPage } from "@/components/shared/types";
import Bars from "@a/Bars.svg";
import useMediaQuery from "@h/useMediaQuery";
import LogoPane from "./LogoPane";
import PageLinks from "./PageLinks";
import MobileMenu from "./MobileMenu";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1240px)");
  const navbarBackground = isTopOfPage
    ? "border-transparent border-[1px]"
    : "shadow-lg border-[1px] border-solid border-[#aaa1e2] bg-[#484178]/60 backdrop-blur";

  return (
    <nav>
      {/* Global Position */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Aligning towards center */}
        <div
          className={`transition delay-150 ${navbarBackground} flex px-3 py-3 justify-center gap-1 rounded-xl ${flexBetween} mx-auto w-3/4`}
        >
          {/* Aligning depending screen size */}
          <div className={` ${flexBetween} w-full gap-10`}>
            {/* Left Side */}
            <LogoPane
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <PageLinks
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="Menu" src={Bars} />
              </button>
            )}
            {/* Mobile Menu Modal */}
            {/* TODO: finish mobile menu */}
            {!isAboveMediumScreens && isMenuToggled && (
              <MobileMenu
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
