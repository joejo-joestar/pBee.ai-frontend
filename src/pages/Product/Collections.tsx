import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useCollections } from "@/hooks/useCollections";
import UploadModal from "@/components/UploadModal";
import Spinner from "@/components/shared/Spinner";
import AssetsModal from "@/components/AssetsModal";
import { Separator } from "@/assets/Separator";

const Collections: FC = () => {
  const { collections, loading, error, fetchCollections } = useCollections();
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [showAssetsModal, setShowAssetsModal] = useState<boolean>(false);
  const [currentCollectionName, setCurrentCollectionName] =
    useState<string>("");

  const handleAddAsset = () => {
    setShowUploadModal(true);
  };

  const handleCardClick = (collectionName: string) => {
    setCurrentCollectionName(collectionName);
    setShowAssetsModal(true);
  };

  return (
    <>
      {/* Upload Modal */}
      <UploadModal
        isVisible={showUploadModal}
        onClose={() => {
          setShowUploadModal(false);
          fetchCollections();
        }}
      />

      {/* Assets Modal */}
      <AssetsModal
        isVisible={showAssetsModal}
        onClose={() => {
          setShowAssetsModal(false);
          fetchCollections();
        }}
        collectionName={currentCollectionName}
      />

      
      <div className="flex h-screen w-screen justify-center bg-dark p-5">
        <div className="ml-64 flex w-full flex-col gap-5 bg-dark">
          {/* Title */}
          <h2 className="font-display text-2xl">Collections</h2>
          <Separator />
          <div className="mx-auto w-3/4">
            <div className="flex h-fit w-full flex-wrap justify-start gap-4 bg-dark">
              {loading ? (
                <Spinner style={`size-32`} />
              ) : error ? (
                <p className="ml-64 flex h-fit w-fit flex-grow text-sm text-red-500">
                  Error fetching data: {error}
                </p>
              ) : (
                <>
                  {collections.map((collection, index) => (
                    <div
                      key={index}
                      className="flex h-48 w-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md"
                      onClick={() => handleCardClick(collection.collectionName)}
                    >
                      {/* Cards */}
                      <div className="h-1/2 w-full rounded-t-lg bg-gray-500">
                        <img
                          src={collection.logo}
                          alt={collection.collectionName}
                        />
                      </div>
                      <div className="flex h-1/2 w-full flex-col items-center justify-center p-2">
                        <div className="mb-1 text-sm text-gray-600">
                          {collection.collectionName}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Add Collection Card */}
              <div className="flex h-48 w-72 flex-col items-center justify-center gap-4 rounded-lg bg-white p-5 shadow-md">
                <button
                  onClick={handleAddAsset}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-cardColor text-xl text-white transition hover:shadow-cardGlowEffect"
                >
                  <FaPlus />
                </button>
                <div className="text-center text-xs text-gray-500">
                  Collections helps pBee.ai create consistent designs with your
                  brand or style.
                </div>
                <div className="text-center text-lg text-gray-800">
                  Upload Brand Assets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
