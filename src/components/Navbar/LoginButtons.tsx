import ActionButton from "@/components/shared/ActionButton";
import Links from "./PLink";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  style: string;
  buttonStyle: string;
  selectedPage: SelectedPage;
};

const Logo = ({ style, buttonStyle, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links page="Sign In" selectedPage={selectedPage} />
      <ActionButton style={`${buttonStyle}`} page={SelectedPage.Pricing}>
        Get Started
      </ActionButton>
    </div>
  );
};

export default Logo;