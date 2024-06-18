import { SelectedPage } from "./types";

type Props = {
  style: string;
  children: React.ReactNode;
  page: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ style, children, page, setSelectedPage }: Props) => {
  return (
    <a
      className={`${style} transition duration-500 flex flex-col justify-center items-center gap-1 rounded-xl bg-gradient-to-b from-[#4d3fb0]/60 to-[#7063cb]/50 border-2 border-solid border-[#aaa1e2] hover:border-[#aaa1e2]/40`}
      href={`#${page}`}
      onClick={(e) => {
        let currentPage = document.getElementById(page);
        e.preventDefault(); // Stop Page Reloading
        currentPage && currentPage.scrollIntoView({ behavior: "smooth" });
        setSelectedPage(page);
      }}
    >
      {children}
    </a>
  );
};

export default ActionButton;
