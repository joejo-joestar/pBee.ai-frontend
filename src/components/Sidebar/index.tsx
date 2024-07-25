import { FC, useState } from "react";
import Submenu from "./Submenu";
import { IconContext } from "react-icons";
import { useSidebarData } from "./SidebarData";
import { SidebarItem } from "../shared/SidebarItem";
import { FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/assets/Separator";
import NewPosterModal from "../NewPosterModal";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const sidebarData = useSidebarData();

  const [showCustomizeModal, setShowCustomizeModal] = useState<boolean>(false);
  const handleNewPosterClick = () => {
    navigate("/product/");
    setShowCustomizeModal(true);
  };

  const handleProfileClick = () => {
    navigate("/product/profile");
  };

  return (
    <>
      <NewPosterModal
        isVisible={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
      />
      <IconContext.Provider value={{ color: "white" }}>
        <div className="fixed left-0 top-0 z-10 flex h-screen w-64 flex-col justify-between gap-4 bg-productDark p-2.5">
          <div className="flex flex-col gap-3">
            <button
              onClick={handleNewPosterClick}
              className="cursor-pointer rounded-full border-none bg-cardColor p-4 text-lg shadow-cardGlowEffect transition hover:bg-cardColor/70"
            >
              New Poster
            </button>
            {sidebarData.map((item: SidebarItem, index: number) => (
              <Submenu item={item} key={index} />
            ))}
            <Separator />

            {/* TODO: Display Favorites */}
            <div>
              <div className="px-1 font-bold">Favorites</div>
            </div>
          </div>

          {/* Profile Section */}
          <div
            onClick={handleProfileClick}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-cardColor/50 p-2 transition hover:bg-cardColor/80"
          >
            <div className="flex flex-col items-start">
              <span className="text-sm">User Name</span>
              <span className="text-xs text-gray-300">Enterprise</span>
            </div>
            <div className="cursor-pointer">
              <FaCog size={16} />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
