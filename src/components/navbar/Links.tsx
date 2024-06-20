import { SelectedPage } from "@c/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
};

const Link = ({ page, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-lavender70" : ""}
      transition duration-500 hover:text-lavender70`}
      href={`#${lowerCasePage}`}
    >
      {page}
    </a>
  );
};

export default Link;
