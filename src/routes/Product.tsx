import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const Product: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Product;
