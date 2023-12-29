// TallaSelector.tsx
import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  sizeSelected:string;
  onSizeChange: (size: string) => void;
}
const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, sizeSelected, onSizeChange }) => {
  
  return (
    <div className="mb-2">
      <p className="inline-block text-xl font-semibold text-gray-700 mb-2">
        <span>Talla: </span>
      </p>
      <select
        value={sizeSelected}
        className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => onSizeChange(e.target.value)}
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
