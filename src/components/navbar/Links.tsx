import { SelectedPage } from "@c/shared/types";

type Props = {
  page: string;
  isInPageLink: boolean;
  selectedPage: SelectedPage;
};

const Link = ({ page, isInPageLink, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-lavender70" : ""} transition duration-500 select-none hover:text-lavender70`}
      href={`/${isInPageLink ? `#${lowerCasePage}` : lowerCasePage}`}
    >
      {page}
    </a>
  );
};

export default Link;
