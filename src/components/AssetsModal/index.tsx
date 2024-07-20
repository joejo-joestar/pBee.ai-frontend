import ModalCard from "@/components/shared/ModalCard";
import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import FontFile from "@/assets/FontFile.svg";
import { RemoveIcon } from "@/assets/RemoveIcon";

type Props = { isVisible: boolean; onClose(): void };

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

// // NOTE: Debug Code
// const mockData: Item = {
//   collectionName: "730",
//   logos: [
//     {
//       src: "https://pbeeassets.s3.me-central-1.amazonaws.com/730/veehive.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUFYBAJSRBNBJB2MB%2F20240719%2Fme-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T153037Z&X-Amz-Expires=3600&X-Amz-Signature=de19ddf5949740831412f1cba6e02c347418c04e22b7679ab7e48b469cddc0f8&X-Amz-SignedHeaders=host&x-id=GetObject",
//       name: "veehive.jpg",
//     },
//   ],
//   images: [
//     {
//       src: "https://pbeeassets.s3.me-central-1.amazonaws.com/730/img.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUFYBAJSRBNBJB2MB%2F20240719%2Fme-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T153037Z&X-Amz-Expires=3600&X-Amz-Signature=ef5062cbdb593b8c76b3fa20353ce69a1f3beb186b61a0a9540131671e8249da&X-Amz-SignedHeaders=host&x-id=GetObject",
//       name: "img.png",
//     },
//   ],
//   headerFonts: [
//     {
//       src: "https://pbeeassets.s3.me-central-1.amazonaws.com/730/AestheticMonoline.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUFYBAJSRBNBJB2MB%2F20240719%2Fme-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T153037Z&X-Amz-Expires=3600&X-Amz-Signature=42a912465d802801f5039b478e23f3fb4b174d772ac163e69176fa85508a032d&X-Amz-SignedHeaders=host&x-id=GetObject",
//       name: "AestheticMonoline.ttf",
//     },
//   ],
//   textFonts: [
//     {
//       src: "https://pbeeassets.s3.me-central-1.amazonaws.com/730/AestheticMonoline.ttf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUFYBAJSRBNBJB2MB%2F20240719%2Fme-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T153038Z&X-Amz-Expires=3600&X-Amz-Signature=1c5140df0826cca529b198287b87e7f98dfd9cc464a63a1da34f99b4b57a291f&X-Amz-SignedHeaders=host&x-id=GetObject",
//       name: "AestheticMonoline.ttf",
//     },
//   ],
//   colorPalette: ["#023E8A", "#331858", "#807cd8", "#5b4ead"],
// };

const AssetsModal = ({ isVisible, onClose }: Props) => {
  if (!isVisible) return null;
  // const [_state, updateState] = useState("#");
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible) {
      // setData(mockData);
      setLoading(true);
      fetch("https://your-api-endpoint/api/files")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [isVisible]);

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
        <p className="text-sm text-red-500">Error fetching data: {error}</p>
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
