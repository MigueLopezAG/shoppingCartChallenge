// CantidadControl.tsx
import React from 'react';

interface QtyControlProps {
  qty: number;
  onQtyChange: (cantidad: number) => void;
  max: number
}
const QtyControl: React.FC<QtyControlProps> = ({ qty, onQtyChange, max }) => {
  return (
    <div className="mb-6 mt-6" >
      <p className="inline-block text-xl font-semibold text-gray-700 mb-2">
        <span>Cantidad: </span>
      </p>
      <div className="flex">
        <button
          className="px-2 py-1 border rounded-l-md bg-gray-200"
          onClick={() => onQtyChange(qty - 1)}
          disabled={qty === 1 || max == 0}
        >
          -
        </button>
        <div className="px-4 py-1 border-t border-b">{max == 0 ? '0' : qty}</div>
        <button 
          className="px-2 py-1 border rounded-r-md bg-gray-200" 
          onClick={() => onQtyChange(qty + 1)}
          disabled={qty === max || max == 0}
          >
          +
        </button>
      </div>
    </div>
  );
};

export default QtyControl;
