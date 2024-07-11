import { Field } from "formik";
import { assetsTest } from "./assetsTest";
import { container } from "../shared/FormConst";

type Props = {};

const CollectionSelector = ({}: Props) => {
  return (
    <div>
      <Field
        className={container}
        as="select"
        placeholder="Collection Name"
        name="collection"
      >
        <option key="new collection" value="">
          Pick a Collection
        </option>
        {assetsTest.map((_assets, index) => (
          <option
            key="collections"
            value={assetsTest[index].toLowerCase()}
          >
            {assetsTest[index]}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default CollectionSelector;
