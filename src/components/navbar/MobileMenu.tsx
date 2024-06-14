import Close from "@a/Close.svg";
import { SelectedPage } from "@c/shared/types";
import QuickLinks from "./QuickLinks";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const MobileMenu = ({
  selectedPage,
  setSelectedPage,
  isMenuToggled,
  setIsMenuToggled,
}: Props) => {
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-bgDark70">
      {/* Close Icon */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <img alt="Close" src={Close} />
        </button>
      </div>
      {/* Menu Quick Links */}
      <QuickLinks
        style="ml-[33%] flex flex-col gap-10 text-2xl"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default MobileMenu;
