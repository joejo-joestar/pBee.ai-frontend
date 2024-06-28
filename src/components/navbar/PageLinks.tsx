import { SelectedPage } from "@c/shared/types";
import LoginButtons from "./LoginButtons";
import QuickLinks from "./QuickLinks";
import ScrollToHashElement from "@h/ScrollToAnchor";

type Props = {
  selectedPage: SelectedPage;
};

const flexBetween = "flex items-center justify-between";

const PageLinks = ({ selectedPage }: Props) => {
  return (
    <div className={`${flexBetween} w-2/3 gap-3`}>
      <ScrollToHashElement />
      {/* Quick Links */}
      <QuickLinks style={`${flexBetween} gap-6`} selectedPage={selectedPage} />
      {/* Login/Sign Up Buttons */}
      <LoginButtons
        style={`${flexBetween} gap-8`}
        buttonStyle={`px-6 py-4`}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default PageLinks;
