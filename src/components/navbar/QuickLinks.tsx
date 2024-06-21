import Links from "./Links";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
};

const QuickLinks = ({ style, selectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Links page={"Product"} selectedPage={selectedPage} isInPageLink={true} />
      <Links
        page={"Pricing"}
        selectedPage={selectedPage}
        isInPageLink={false}
      />
      <Links page={"Company"} selectedPage={selectedPage} isInPageLink={true} />
      <Links page={"Contact"} selectedPage={selectedPage} isInPageLink={true} />
    </div>
  );
};

export default QuickLinks;
