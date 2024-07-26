import ActionButton from "@/components/shared/ActionButton";
import Links from "./PLink";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  style: string;
  buttonStyle: string;
  selectedPage: SelectedPage;
};

const LoginButton = ({ style, buttonStyle, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links page="Login" selectedPage={selectedPage} />
      <ActionButton style={`${buttonStyle}`} page={SelectedPage.Register}>
        Get Started
      </ActionButton>
    </div>
  );
};

export default LoginButton;
