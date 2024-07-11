import { Link } from "react-router-dom";
import { SelectedPage } from "./types";

type Props = {
  style: string;
  children: React.ReactNode;
  page: SelectedPage;
};

const ActionButton = ({ style, children, page }: Props) => {
  return (
    <Link
      className={`${style} font-display flex select-none flex-col items-center justify-center gap-1 rounded-xl border-2 border-solid border-lavender70 bg-buttonGradient transition duration-500 hover:border-lavender70/40`}
      to={`${page}`}
    >
      {children}
    </Link>
  );
};

export default ActionButton;
