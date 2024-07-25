import ColorPicker from "./ColorPicker";
import { SetStateAction, useState } from "react";

type Props = {
  values: string[];
};

const ColorPickerSection = ({ values }: Props) => {
  const [_color, setColor] = useState("#");

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setColor(e.target.value);
  };

  return <ColorPicker values={values} onChange={handleInput} />;
};

export default ColorPickerSection;
