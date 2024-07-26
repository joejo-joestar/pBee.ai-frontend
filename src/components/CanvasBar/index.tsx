import React from "react";
import { FaUndo, FaRedo, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { FaWandMagicSparkles, FaDownload } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";

interface CanvasBarProps {
  sessionId?: string;
}

const CanvasBar: React.FC<CanvasBarProps> = ({ sessionId }) => {
  const handleUndo = () => {
    console.log(`Undo action for session ${sessionId}`);
    // Implement undo logic here
  };

  const handleRedo = () => {
    console.log(`Redo action for session ${sessionId}`);
    // Implement redo logic here
  };

  const handleEdit = () => {
    console.log(`Edit action for session ${sessionId}`);
    // Implement edit logic here
  };

  const handleMagic = () => {
    console.log(`Magic button action for session ${sessionId}`);
    // Implement magic button logic here
  };

  const handleDownload = () => {
    console.log(`Download action for session ${sessionId}`);
    // Implement download logic here
  };

  const handleZoomIn = () => {
    console.log(`Zoom In action for session ${sessionId}`);
    // Implement zoom in logic here
  };

  const handleZoomOut = () => {
    console.log(`Zoom Out action for session ${sessionId}`);
    // Implement zoom out logic here
  };

  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 flex h-[70px] w-[397px] -translate-x-1/2 transform items-center justify-center transition">
      <div className="pointer-events-auto flex h-[50px] w-full items-center justify-between rounded-2xl border-t border-gray-300 bg-gray-100 px-5 shadow-md">
        {/* Undo / Redo */}
        <div className="flex items-center gap-2.5">
          {/* Undo Button */}
          <button
            title="Undo"
            onClick={handleUndo}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaUndo />
          </button>

          {/* Redo Button */}
          <button
            title="Redo"
            onClick={handleRedo}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaRedo />
          </button>
        </div>

        {/* Edit / Magic / Download */}
        <div className="flex items-center justify-center gap-5">
          <button
            title="Edit"
            onClick={handleEdit}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <IoIosBrush />
          </button>

          {/* Magic Button */}
          <button
            title="Magic Button"
            onClick={handleMagic}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-cardColor text-white hover:text-gray-800"
          >
            <FaWandMagicSparkles />
          </button>

          {/* Download */}
          <button
            title="Download"
            onClick={handleDownload}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaDownload />
          </button>
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-2.5">
          {/* Zoom out */}
          <button
            title="Zoom Out"
            onClick={handleZoomOut}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaSearchMinus />
          </button>

          {/* Zoom in */}
          <button
            title="Zoom In"
            onClick={handleZoomIn}
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaSearchPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CanvasBar;
