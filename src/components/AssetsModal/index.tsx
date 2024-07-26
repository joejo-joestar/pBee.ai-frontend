import axios from "axios";
import ModalCard from "@/components/shared/ModalCard";
import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import { MdOutlineDeleteForever } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import LogoSection from "./LogoSection";
import ImageSection from "./ImageSection";
import HeaderFontSection from "./HeaderFontSection";
import TextFontSection from "./TextFontSection";
import ColorPaletteSection from "./ColorPaletteSection";
import { Separator } from "@/assets/Separator";
import { useAuth } from "@/contexts/AuthContext";

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
  const { currentUser } = useAuth();
  const [token, setToken] = useState<string>("");
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDeleteVisible, setConfirmDeleteVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken().then(setToken);
    }
  }, [currentUser]);

  // Getting Collection Data
  useEffect(() => {
    if (isVisible && token) {
      const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/${collectionName}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
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
  }, [isVisible, collectionName, token]);

  // Deleting Collection
  const handleDelete = () => {
    if (!token) return;

    const url = `https://firm-gently-ladybird.ngrok-free.app/api/files/folders/${collectionName}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    };

    setLoading(true);
    axios
      .delete(url, config)
      .then(() => {
        setLoading(false);
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
    onClose();
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
