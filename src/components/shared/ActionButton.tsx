import { SelectedPage } from "./types";

type Props = {
  style: string;
  children: React.ReactNode;
  page: SelectedPage;
};

const ActionButton = ({ style, children, page }: Props) => {
  return (
    <a
      className={`${style} bg-buttonGradient flex select-none flex-col items-center justify-center gap-1 rounded-xl border-2 border-solid border-lavender70 transition duration-500 hover:border-lavender70/40`}
      href={`${page}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
