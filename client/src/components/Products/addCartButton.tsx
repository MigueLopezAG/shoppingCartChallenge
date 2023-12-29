// BotonAgregarCarrito.tsx
import React from 'react';

interface AddCartButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({ onClick, disabled }) => {
  return (
    <div className="flex gap-4 mb-6">
      <a 
        onClick={()=>{!disabled && onClick()}}
        //disabled={disabled} 
        className={"w-full px-4 py-3 text-center text-white bg-gray-600 border border-transparent hover:border-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl"}
      >
      Agregar al Carrito</a>
    </div>
  );
};

export default AddCartButton;
