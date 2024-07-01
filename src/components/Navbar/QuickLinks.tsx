import PLink from "./PLink";
import ALink from "./ALink";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
};

const QuickLinks = ({ style, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <ALink page={"Product"} selectedPage={selectedPage} />
      <PLink page={"Pricing"} selectedPage={selectedPage} />
      <ALink page={"Company"} selectedPage={selectedPage} />
      <PLink page={"Contact"} selectedPage={selectedPage} />
    </div>
  );
};

export default QuickLinks;
