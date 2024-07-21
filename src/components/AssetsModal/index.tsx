import axios from "axios";
import ModalCard from "@/components/shared/ModalCard";
import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import FontFile from "@/assets/FontFile.svg";
import { RemoveIcon } from "@/assets/RemoveIcon";

type Props = { isVisible: boolean; onClose(): void; collectionName: string };

interface FileItem {
  src: string;
  name: string;
}

interface Item {
  collectionName: string;
  logos: FileItem[];
  images: FileItem[];
  headerFonts: FileItem[];
  textFonts: FileItem[];
  colorPalette: string[];
}

const AssetsModal = ({ isVisible, onClose, collectionName }: Props) => {
  if (!isVisible) return null;
  const [_state, updateState] = useState("#");
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible) {
      setLoading(true);
      const url = `https://outgoing-termite-roughly.ngrok-free.app/api/files/${collectionName}`;
      
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [isVisible, collectionName]);

  return (
    <ModalCard onClose={onClose}>
      <div className="flex justify-between">
        <h2 className="font-display font-bold">{data?.collectionName}</h2>
        <button onClick={onClose}>
          <RemoveIcon />
        </button>
      </div>
      <div className="h-0 w-auto border border-solid border-cardColor" />
      {loading && <Spinner style={`size-32`} />}
      {error && (
        <p className="flex h-fit flex-grow text-sm text-red-500">
          Error fetching data: {error}
        </p>
      )}
      {/* Logos */}
      <div className="flex flex-col gap-2">
        <label id="logos" />
        Logos
        {data?.logos.map((logo, index) => (
          <div key={index} className="flex flex-row items-center gap-4 p-2">
            <img
              src={logo.src}
              alt={`Logo ${index + 1}`}
              className="size-9 rounded-lg object-cover"
            />
            <a href={logo.src} target="_blank" className="text-sm">
              {logo.name}
            </a>
          </div>
        ))}
      </div>

      {/* Images */}
      <div className="flex flex-col gap-2">
        <label id="images" />
        Images
        {data?.images.map((image, index) => (
          <div key={index} className="flex flex-row items-center gap-4 p-2">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="size-9 rounded-lg object-cover"
            />
            <a href={image.src} target="_blank" className="text-center text-sm">
              {image.name}
            </a>
          </div>
        ))}
      </div>

      {/* Header Fonts */}
      <div className="flex flex-col gap-2">
        <label id="headerFont" />
        Header Fonts
        {data?.headerFonts.map((font, index) => (
          <div key={index} className="flex flex-row items-center gap-4 p-2">
            <img
              src={FontFile}
              alt={`Header Font ${index + 1}`}
              className="size-9 rounded-lg object-cover"
            />
            <a href={font.src} target="_blank" className="text-center text-sm">
              {font.name}
            </a>
          </div>
        ))}
      </div>

      {/* Text Fonts */}
      <div className="flex flex-col gap-2">
        <label id="textFonts" />
        Text Fonts
        {data?.textFonts.map((font, index) => (
          <div key={index} className="flex flex-row items-center gap-4 p-2">
            <img
              src={FontFile}
              alt={`Text Font ${index + 1}`}
              className="size-9 rounded-lg object-cover"
            />
            <a href={font.src} target="_blank" className="text-center text-sm">
              {font.name}
            </a>
          </div>
        ))}
      </div>

      {/* Color Palette */}
      <div className="flex flex-col gap-2">
        <label id="colorPalette" />
        Color Palette
        <div className="flex flex-row flex-wrap gap-2">
          {data?.colorPalette.map((color, index) => (
            <div
              key={index}
              className="size-9 rounded-lg"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </ModalCard>
  );
};

export default AssetsModal;
