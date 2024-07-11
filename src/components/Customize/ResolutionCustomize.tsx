import { inputField, setButton } from "../shared/FormConst";

type Props = {
  onCustomResolution: (width: string, height: string) => void;
};

export const ResolutionCustomize = ({ onCustomResolution }: Props) => {
  return (
    <>
      <div />
      <div className="flex flex-row items-center gap-3">
        <label htmlFor="customWidth" className="text-lg font-medium">
          W
        </label>
        <input
          type="number"
          id="customWidth"
          placeholder={"Width"}
          min={1}
          max={8000}
          className={inputField}
        />
      </div>
      <div className="flex flex-row items-center gap-3">
        <label htmlFor="customHeight" className="text-lg font-medium">
          H
        </label>
        <input
          type="number"
          id="customHeight"
          placeholder={"Height"}
          min={1}
          max={8000}
          className={inputField}
        />
      </div>
      <button
        type="button"
        className={setButton}
        onClick={() => {
          const customWidth = document.getElementById(
            "customWidth",
          ) as HTMLInputElement;
          const customHeight = document.getElementById(
            "customHeight",
          ) as HTMLInputElement;
          if (customWidth && customHeight) {
            onCustomResolution?.(customWidth.value, customHeight.value);
          }
        }}
      >
        Set
      </button>
    </>
  );
};
