import { FC } from "react";
import "./App.css";
import Sidebar from "@/components/Sidebar";
import Chatbar from "@/components/Chatbar";
import { useLocation, Outlet } from "react-router-dom";
import Canvas from "@/components/Canvas";

const MainLayout: FC = () => {
  const location = useLocation();

  const isFavoritePath = location.pathname.startsWith("product/favorites");
  const isDesignPath = location.pathname === "/product/design";

  return (
    <div className="flex h-full w-full flex-row justify-between bg-red-500">
      <Sidebar />
      <div className="flex w-full flex-row p-5">
        {/* {isFavoritePath && <Canvas />} */}
        {/* {(isFavoritePath || isDesignPath) && <Chatbar />} */}
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
