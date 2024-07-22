import { FC } from "react";
import Canvas from "../components/Canvas";
import Chatbar from "@/components/Chatbar";

const Sidebar: FC = () => {
  return (
    <div className="flex min-w-full flex-row justify-between bg-orange-500">
      <Canvas />
      <Chatbar />
    </div>
  );
};

export default Sidebar;
