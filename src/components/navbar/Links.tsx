import { SelectedPage } from "@c/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-lavender70" : ""}
      transition duration-500 hover:text-lavender70`}
      href={`#${lowerCasePage}`}
      onClick={(e) => {
        let currentPage = document.getElementById(lowerCasePage);
        e.preventDefault(); // Stop Page Reloading
        currentPage && currentPage.scrollIntoView({ behavior: "smooth" });
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </a>
  );
};

export default Link;
