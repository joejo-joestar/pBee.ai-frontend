import { SelectedPage } from "./types";

type Props = {
  style: string;
  children: React.ReactNode;
  page: SelectedPage;
  // setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ style, children, page }: Props) => {
  return (
    <a
      className={`${style} transition duration-500 flex flex-col justify-center items-center gap-1 rounded-xl bg-gradient-to-b from-[#4d3fb0]/60 to-[#7063cb]/50 border-2 border-solid border-[#aaa1e2] hover:border-[#aaa1e2]/40`}
      href={`#${page}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
