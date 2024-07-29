import { Field } from "formik";
import { container, setButton } from "../shared/FormConst";
import Spinner from "../shared/Spinner";
import { useCollections } from "@/hooks/useCollections";

type Props = {
  setShowUploadModal: () => void;
};

const CollectionSelector = ({ setShowUploadModal }: Props) => {
  const { collections, loading, error } = useCollections();

  return (
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
                name="collectionsName"
              >
                <option key="none" value="">
                  Select a Collection
                </option>

                <option key="default" value="default collection">
                  Continue Without a Collection
                </option>
                {collections.map((collection, index) => (
                  <option
                    key={`collection-${index}`}
                    value={collection.collectionName}
                  >
                    {collection.collectionName}
                  </option>
                ))}
              </Field>
            </>
          )}
          <button
            type="button"
            className={`${setButton} w-40 p-3`}
            onClick={() => {
              setShowUploadModal();
            }}
          >
            Create New
          </button>
        </>
      )}
    </div>
  );
};

export default CollectionSelector;
