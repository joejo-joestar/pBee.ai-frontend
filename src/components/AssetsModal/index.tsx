import axios from "axios";
import ModalCard from "@/components/shared/ModalCard";
import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import { MdOutlineDeleteForever } from "react-icons/md";
// import { mockData } from "./mockData";
import DeleteModal from "./DeleteModal";
import LogoSection from "./LogoSection";
import ImageSection from "./ImageSection";
import HeaderFontSection from "./HeaderFontSection";
import TextFontSection from "./TextFontSection";
import ColorPaletteSection from "./ColorPaletteSection";
import { Separator } from "@/assets/Separator";

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
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDeleteVisible, setConfirmDeleteVisible] =
    useState<boolean>(false);

  // Getting Collection Data
  useEffect(() => {
    if (isVisible) {
      const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/${collectionName}`;
      const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4MjM3NjEsImV4cCI6MTcyMTgyNzM2MX0.B5HkVCMPRqespk9dIE-pohEpA1ApOgJ9kn-Zrg2oBy8",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };

      setLoading(true);
      axios
        .get(url, config)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });

      // NOTE: Using mock data for testing
      // setData(mockData);
    }
  }, [isVisible, collectionName]);

  // Deleting Collection
  const handleDelete = () => {
    const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/folders/${collectionName}`;
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6IjYwZDVmOWI5YzJmNDJiMDAxYzNlM2Y5NiJ9LCJpYXQiOjE3MjE4OTY0ODQsImV4cCI6MTcyMTkwMDA4NH0.atHOFna6FKJcx_vWl7K0GoTVOAiFd4gb5VPmB7khYJ4",
        "ngrok-skip-browser-warning": "true",
      },
    };

    setLoading(true);
    axios
      .delete(url, config)
      .then(() => {
        setLoading(false);
        onClose();
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Open Delete Modal
  const handleConfirmDelete = () => {
    setConfirmDeleteVisible(true);
  };

  // Close Delete Modal
  const handleCancelDelete = () => {
    setConfirmDeleteVisible(false);
  };

  // Close Delete Modal and Delete Collection
  const handleConfirmDeleteAction = () => {
    setConfirmDeleteVisible(false);
    handleDelete();
  };

  if (!isVisible) return null;

  return (
    <>
      <ModalCard onClose={onClose} closeOnClick>
        <div className="flex justify-between">
          {/* Collection Name */}
          <h2 className="font-display font-bold">{data?.collectionName}</h2>

          {/* Delete Button */}
          <button onClick={handleConfirmDelete}>
            <MdOutlineDeleteForever className="size-6 text-red-500 transition hover:text-red-700" />
          </button>
        </div>

        <Separator />

        {/* Body */}
        {loading ? (
          <Spinner style={`size-32`} />
        ) : error ? (
          <p className="flex h-fit flex-grow text-sm text-red-500">
            Error fetching data: {error}
          </p>
        ) : (
          <>
            <LogoSection logos={data?.logos} />
            <ImageSection images={data?.images} />
            <HeaderFontSection headerFonts={data?.headerFonts} />
            <TextFontSection textFonts={data?.textFonts} />
            <ColorPaletteSection colorPalette={data?.colorPalette} />
          </>
        )}
      </ModalCard>

      {/* Confirmation Modal */}
      <DeleteModal
        isVisible={confirmDeleteVisible}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDeleteAction}
      />
    </>
  );
};

export default AssetsModal;
