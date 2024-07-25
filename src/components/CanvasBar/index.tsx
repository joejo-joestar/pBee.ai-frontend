import React from "react";
import { FaUndo, FaRedo, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { FaWandMagicSparkles, FaDownload } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";

const CanvasBar: React.FC = () => {
  return (
    <div className="pointer-events-none absolute bottom-0 left-1/2 flex h-[70px] w-[397px] -translate-x-1/2 transform items-center justify-center transition">
      <div className="pointer-events-auto flex h-[50px] w-full items-center justify-between rounded-2xl border-t border-gray-300 bg-gray-100 px-5 shadow-md">
        {/* Undo / Redo */}
        <div className="flex items-center gap-2.5">
          {/* Undo Button */}
          <button
            title="Undo"
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaUndo />
          </button>

          {/* Redo Button */}
          <button
            title="Redo"
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaRedo />
          </button>
        </div>

        {/* TODO: check */}
        <div className="flex items-center justify-center gap-5">
          <button
            title="Edit"
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <IoIosBrush />
          </button>

          {/* Magic Button */}
          <button
            title="Magic Button"
            className="bg-cardColor flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-white hover:text-gray-800"
          >
            <FaWandMagicSparkles />
          </button>

          {/* Download */}
          <button
            title="Download"
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
            className="cursor-pointer border-none bg-none p-1 text-lg text-gray-800 hover:text-cardColor"
          >
            <FaSearchMinus />
          </button>

          {/* Zoom in */}
          <button
            title="Zoom In"
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
