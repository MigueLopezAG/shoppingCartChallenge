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
      <label className="block text-sm font-medium text-gray-600">Talla:</label>
      <select
        value={sizeSelected}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
