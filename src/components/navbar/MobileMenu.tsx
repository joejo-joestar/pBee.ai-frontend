import Close from "@a/Close.svg";
import { SelectedPage } from "@c/shared/types";
import QuickLinks from "./QuickLinks";
import LoginButtons from "./LoginButtons";

// TODO: add slide in transition (optional)

type Props = {
  selectedPage: SelectedPage;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const MobileMenu = ({
  selectedPage,
  isMenuToggled,
  setIsMenuToggled,
}: Props) => {
  return (
    <div className="fixed flex flex-col gap-10 right-0 bottom-0 z-40 h-full w-[300px] bg-bgDark70">
      {/* Close Icon */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <img alt="Close" src={Close} />
        </button>
      </div>
      {/* Menu Quick Links */}
      <QuickLinks
        style="ml-[15%] flex flex-col justify-left gap-10 text-2xl"
        selectedPage={selectedPage}
      />
      <LoginButtons
        style={`ml-[15%] flex flex-col gap-10 text-2xl`}
        buttonStyle={`px-6 py-4 basis-3/4 w-[200px] `}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default MobileMenu;
