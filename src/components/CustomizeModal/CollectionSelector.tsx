import { Field } from "formik";
import { assetsTest } from "./assetsTest";
import { container, setButton } from "../shared/FormConst";
import BrandAssets from "../UploadModal";
import { useState } from "react";

type Props = {};

const CollectionSelector = ({}: Props) => {
  const [showCollectionModal, setShowCollectionModal] =
    useState<boolean>(false);

  return (
    <div className={`${container} flex flex-row gap-5`}>
      <BrandAssets
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
        {assetsTest.map((_assets, index) => (
          <option
            key={`collections ${index}`}
            value={assetsTest[index].toLowerCase()}
          >
            {assetsTest[index]}
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
