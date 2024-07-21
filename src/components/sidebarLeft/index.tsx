// Sidebar component
import React, { useState } from "react";
import UploadModal from "../UploadModal";
import CustomizeModal from "../CustomizeModal";
import Canvas from "@/components/Canvas/Canvas";
import AssetsModal from "../AssetsModal";

interface Tab {
  title: string;
  content: React.ReactNode;
}

const Sidebar: React.FC = () => {
  const [showCustomizeModal, setShowCustomizeModal] = useState<boolean>(false);
  const [showAssetsModal, setShowAssetsModal] = useState<boolean>(false);
  const [showCollectionModal, setShowCollectionModal] =
    useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("design"); // Set initial active tab

  const tabs: Tab[] = [
    { title: "Design", content: <Canvas /> },
    {
      title: "Collections",
      content: (
        <UploadModal
          isVisible={showCollectionModal}
          onClose={() => setShowCollectionModal(false)}
        />
      ),
    }, // will open collections modal (for now)
    {
      title: "History",
      content: (
        <AssetsModal
          isVisible={showAssetsModal}
          onClose={() => setShowAssetsModal(false)} collectionName={"test1"}        />
      ),
    },
  ];

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    setShowCollectionModal(true);
    setShowAssetsModal(true);
  };

  const activeContent = tabs.find((tab) => tab.title === activeTab)?.content;

  return (
    <>
      <CustomizeModal
        isVisible={showCustomizeModal}
        onClose={() => setShowCustomizeModal(false)}
      />
      <div className="flex h-full w-1/5 bg-gray-200 shadow-lg">
        <div className="flex h-full w-full flex-col">
          <div className="flex items-center p-4">
            {/* new poster button should open the customize modal (for now) */}
            <button
              className="flex w-full rounded-lg bg-violet-500 px-4 py-2 text-white hover:bg-blue-700"
              onClick={() => setShowCustomizeModal(true)}
            >
              New Poster
            </button>
          </div>
          <div className="flex flex-col space-y-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.title}
                className={`rounded-lg px-4 py-2 hover:bg-gray-300/30 ${
                  activeTab === tab.title
                    ? "bg-gray-300 text-violet-600"
                    : "text-gray-600"
                }`}
                onClick={() => handleClick(tab.title)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      {activeContent}
    </>
  );
};

export default Sidebar;
