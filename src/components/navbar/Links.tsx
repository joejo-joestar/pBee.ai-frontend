import { SelectedPage } from "@c/shared/types";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  isInPageLink: boolean;
  selectedPage: SelectedPage;
};

const CustomLink = ({ page, isInPageLink, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "text-lavender70" : ""} select-none transition duration-500 hover:text-lavender70`}
      to={`/${isInPageLink ? `#${lowerCasePage}` : lowerCasePage}`}
    >
      {page}
    </Link>
  );
};

export default CustomLink;
