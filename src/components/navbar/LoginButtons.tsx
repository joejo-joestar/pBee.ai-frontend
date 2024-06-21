import ActionButton from "@c/shared/ActionButton";
import Links from "./Links";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  buttonStyle: string;
  selectedPage: SelectedPage;
};

const Logo = ({ style, buttonStyle, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links page="Sign In" selectedPage={selectedPage} isInPageLink={false} />
      <ActionButton style={`${buttonStyle}`} page={SelectedPage.Pricing}>
        Get Started
      </ActionButton>
    </div>
  );
};

export default Logo;
