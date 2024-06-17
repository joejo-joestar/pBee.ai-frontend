import { SelectedPage } from "@c/shared/types";
import LoginButtons from "./LoginButtons";
import QuickLinks from "./QuickLinks";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const flexBetween = "flex items-center justify-between";

const PageLinks = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${flexBetween} w-2/3 gap-3`}>
      {/* Quick Links */}
      <QuickLinks
        style={`${flexBetween} gap-6`}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* Login/Sign Up Buttons */}
      <LoginButtons
        style={`${flexBetween} gap-8`}
        buttonStyle={`px-6 py-4`}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default PageLinks;
