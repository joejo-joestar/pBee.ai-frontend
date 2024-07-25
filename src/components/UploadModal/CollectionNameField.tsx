import { Field } from "formik";

const CollectionNameField = () => (
  <div className="flex flex-col gap-2">
    <label id="collectionName">
      Collection Name
      <Field
        className="min-h-16 w-full rounded-xl bg-tabContainer px-4"
        name="collectionsName"
        type="text"
        placeholder="Asset Name"
      />
    </label>
  </div>
);

export default CollectionNameField;
