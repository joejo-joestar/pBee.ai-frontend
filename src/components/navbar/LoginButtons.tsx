import ActionButton from "../shared/ActionButton";
import Link from "./Link";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const flexBetween = "flex items-center justify-between";

const Logo = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${flexBetween} gap-8`}>
      <Link
        page="Sign In"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
        <ActionButton
            size="px-6 py-4"
            setSelectedPage={setSelectedPage}
        >Get Started</ActionButton>
    </div>
  );
};

export default Logo;
