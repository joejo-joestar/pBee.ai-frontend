import ActionButton from "@c/shared/ActionButton";
import Link from "./Link";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  buttonStyle: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Logo = ({ style, buttonStyle, selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Link
        page="Sign In"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <ActionButton
        style={`${buttonStyle}`}
        page={SelectedPage.Pricing}
        setSelectedPage={setSelectedPage}
      >
        Get Started
      </ActionButton>
    </div>
  );
};

export default Logo;
