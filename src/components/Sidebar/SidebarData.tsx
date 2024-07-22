import { SidebarItem } from "../shared/SidebarItem";
import { PiCirclesThree } from "react-icons/pi";
import { RxReload } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const style = { color: "white" };
export const SidebarData: SidebarItem[] = [
  {
    title: "Design",
    path: "/product/design",
    icon: <HiOutlinePencilSquare style={style} />,
  },
  {
    title: "Collections",
    path: "/product/collections",
    icon: <PiCirclesThree style={style} />,
  },
  {
    title: "History",
    path: "/product/history",
    icon: <RxReload style={style} />,
  },
];
