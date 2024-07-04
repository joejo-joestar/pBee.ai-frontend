import React, { useState } from 'react';
import { BlockPicker } from 'react-color';

interface Color {
  hex: string;
}

const ColorPicker: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [customColors, setCustomColors] = useState<Color[]>([]);

  const handleColorChange = (color: { hex: string }) => {
    if (color.hex !== '#fff') {
      setColors([...colors, { hex: color.hex }]);
    }
  };

  const handleAddCustomColor = (hex: string) => {
    if (hex.length === 7 && hex.startsWith('#')) {
      setCustomColors([...customColors, { hex: hex.slice(1) }]);
    } else {
      console.error('Invalid hex code format. Please enter a valid hex code like #ff00ff');
    }
  };

  const handleRemoveColor = (index: number) => {
    if (index >= 0 && index < colors.length) {
      setColors((prevColors) => prevColors.filter((_, i) => i !== index));
    }
  };

  const handleRemoveCustomColor = (index: number) => {
    if (index >= 0 && index < customColors.length) {
      setCustomColors((prevColors) => prevColors.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="color-picker bg-white rounded-lg shadow-md p-4">
      <h2>Color Picker</h2>
      <div className="color-pickers flex justify-between">
        <BlockPicker
          color={colors[colors.length - 1]?.hex || '#fff'}
          onChange={handleColorChange}
          className="w-full"
        />
        <div className="custom-color-picker flex flex-col">
          <input
            type="text"
            placeholder="Enter custom hex code (e.g. #ff00ff)"
            onChange={(e) => handleAddCustomColor(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 mb-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
      <div className="selected-colors mt-4">
        <h3>Predefined Colors</h3>
        <ul className="list-none">
          {colors.map((color, index) => (
            <li key={color.hex} className="flex items-center py-2">
              <span style={{ backgroundColor: `#${color.hex}` }} className="w-6 h-6 mr-2 rounded-full"></span>
              <button onClick={() => handleRemoveColor(index)} className="text-red-500 hover:underline">
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h3>Custom Colors</h3>
        <ul className="list-none">
          {customColors.map((color, index) => (
            <li key={color.hex} className="flex items-center py-2">
              <span style={{ backgroundColor: `#${color.hex}` }} className="w-6 h-6 mr-2 rounded-full"></span>
              <button onClick={() => handleRemoveCustomColor(index)} className="text-red-500 hover:underline">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorPicker;
