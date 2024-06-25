// Sidebar component
import React, { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
}

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("design"); // Set initial active tab

  const tabs: Tab[] = [
    { title: "Design", content: <div>Design</div> },
    { title: "Collections", content: <div>Collections</div> },
    { title: "History", content: <div>History</div> },
  ];

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeContent = tabs.find((tab) => tab.title === activeTab)?.content;

  return (
    <div className="fixed left-0 h-full w-1/5 bg-gray-200 shadow-lg">
      <div className="flex h-full flex-col">
        <div className="flex items-center p-4">
          <button className="flex w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
            New Poster
          </button>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              className={`rounded-lg px-4 py-2 hover:bg-gray-300 ${
                activeTab === tab.title
                  ? "bg-gray-300 text-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => handleClick(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      {activeContent}
    </div>
  );
};

export default Sidebar;
