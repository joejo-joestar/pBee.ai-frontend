import { useState } from "react";
import { Tooltip } from "react-tooltip";

type Props = {
  colorPalette: string[] | undefined;
};

const ColorPaletteSection = ({ colorPalette }: Props) => {
  const [_tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const [_hexCode, setHexCode] = useState<string>("");

  if (!colorPalette || colorPalette.length === 0)
    return <p>No colors available</p>;

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color);
    setHexCode(color);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <label id="colorPalette">Color Palette</label>
      <div className="flex flex-row flex-wrap gap-2">
        {colorPalette.map((color, index) => (
          <div key={index} className="relative">
            <div
              className="color size-9 cursor-pointer rounded-lg"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
              data-tooltip-id="colors"
              data-tooltip-content={color}
              data-tooltip-place="bottom"
              data-for={`tooltip-${index}`}
            />
          </div>
        ))}
      </div>
      <Tooltip
        id="colors"
        disableStyleInjection
        className="rounded-lg bg-tabContainer p-2 text-sm text-lavender70"
      />
    </div>
  );
};

export default ColorPaletteSection;
