// BotonAgregarCarrito.tsx
import React from 'react';

interface AddCartButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className={"bg-black text-white px-4 py-2 rounded-md"}
      onClick={onClick}
      disabled={disabled}
    >
      Agregar al Carrito
    </button>
  );
};

export default AddCartButton;
