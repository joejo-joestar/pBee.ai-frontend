import Link from "./Link";
import { SelectedPage } from "@c/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const QuickLinks = ({ style, selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Link
        page={SelectedPage.Product}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedPage.Pricing}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedPage.Company}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedPage.Contact}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default QuickLinks;
