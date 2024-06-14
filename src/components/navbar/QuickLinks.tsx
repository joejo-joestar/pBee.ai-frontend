import Link from "./Link";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  style: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const QuickLinks = ({ style, selectedPage, setSelectedPage }: Props) => {
  return (
    <div className={`${style}`}>
      <Link
        page="Product"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Pricing"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Company"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default QuickLinks;
