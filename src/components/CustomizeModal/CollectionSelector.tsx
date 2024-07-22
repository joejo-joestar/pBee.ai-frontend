import axios from "axios";
import { Field } from "formik";
import { useEffect, useState } from "react";
import { container, secondaryButton, setButton } from "../shared/FormConst";
import UploadModal from "../UploadModal";
import Spinner from "../shared/Spinner";

type Props = {};

const CollectionSelector = ({}: Props) => {
  const [showCollectionModal, setShowCollectionModal] =
    useState<boolean>(false);
  const [collections, setCollections] = useState<
    { collection: string; logo: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch collections
    const fetchCollections = async () => {
      setLoading(true);
      try {
        // Replace with your API URL
        const response = await axios.get<
          { collection: string; logo: string }[]
        >("https://your-api-url.com/api/collections");
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError("Failed to fetch collections.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <>
      <UploadModal
        isVisible={showCollectionModal}
        onClose={() => setShowCollectionModal(false)}
      />
      <div
        className={`${container} flex flex-row items-center justify-center gap-5`}
      >
        {loading ? (
          <div className="w-full">
            <Spinner style={"size-8 items-center justify-center"} />
          </div>
        ) : (
          <>
            {error ? (
              <p className="flex w-full items-center justify-center text-sm text-red-500">
                Error fetching data: {error}
              </p>
            ) : (
              <>
                <Field
                  className="flex min-h-14 w-full flex-row justify-between gap-4 rounded-xl bg-tabContainer p-1"
                  as="select"
                  placeholder="Collection Name"
                  name="collection"
                >
                  <option key="default" value="default collections">
                    Continue Without a Collection
                  </option>
                  {collections.map((collection, index) => (
                    <option
                      key={`collection-${index}`}
                      value={collection.collection}
                    >
                      {collection.collection}
                    </option>
                  ))}
                </Field>
                <button
                  type="button"
                  className={`${setButton} w-40 disabled:${secondaryButton}`}
                  onClick={() => setShowCollectionModal(true)}
                >
                  Create New
                </button>
              </>
            )}{" "}
          </>
        )}
      </div>
    </>
  );
};

export default CollectionSelector;
