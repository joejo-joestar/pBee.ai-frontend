import { useState } from "react";
import { SelectedPage } from "@/components/shared/types";
import LogoPane from "./LogoPane";
import QuickLinks from "./QuickLinks";
import LoginButtons from "./LoginButtons";
import useMediaQuery from "@/hooks/useMediaQuery";
import Bars from "@/assets/Bars.svg";
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
  const navbarBackground = isTopOfPage ? "" : "bg-[#484178]";

  return (
    <nav>
      {/* Global Position */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Aligning towards center */}
        <div
          className={`${navbarBackground} transition flex px-3 py-3 justify-center gap-1 rounded-xl ${flexBetween} mx-auto w-2/3`}
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
              <div className={`${flexBetween} w-2/3 gap-3`}>
                {/* Quick Links */}
                <QuickLinks
                  style={`${flexBetween} gap-6`}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* Login/Sign Up Buttons */}
                <LoginButtons
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            ) : (
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="Menu" src={Bars} />
              </button>
            )}
            {/* Mobile Menu Modal */}
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
