import { Field } from "formik";
import { useEffect, useState } from "react";
import { container, setButton } from "../shared/FormConst";
import UploadModal from "../UploadModal";

type Props = {};

const CollectionSelector = ({}: Props) => {
  const [showCollectionModal, setShowCollectionModal] =
    useState<boolean>(false);
  const [collections, setCollections] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data for testing
    const mockCollections = [
      "Collection One",
      "Collection Two",
      "Collection Three",
    ];

    // Simulate a fetch call with mock data
    const fetchCollections = async () => {
      setLoading(false);
      try {
        // const response = await fetch(
        //   "https://your-api-url.com/api/collections",
        // );
        setCollections(mockCollections);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError("Failed to fetch collections.");
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`${container} flex flex-row gap-5`}>
      <UploadModal
        isVisible={showCollectionModal}
        onClose={() => setShowCollectionModal(false)}
      />
      <Field
        className="flex min-h-14 w-full flex-row justify-between gap-4 rounded-xl bg-tabContainer p-1"
        as="select"
        placeholder="Collection Name"
        name="collection"
      >
        <option key="new collection" value="">
          Pick a Collection
        </option>
        {collections.map((collection, index) => (
          <option key={`collection-${index}`} value={collection.toLowerCase()}>
            {collection}
          </option>
        ))}
      </Field>
      <button
        type="button"
        className={`${setButton} w-40`}
        onClick={() => setShowCollectionModal(true)}
      >
        Create New
      </button>
    </div>
  );
};

export default CollectionSelector;
