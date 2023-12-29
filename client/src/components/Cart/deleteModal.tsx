// Importar los módulos necesarios
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

// Definir el componente de modal
const DeleteModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"h-auto w-auto"}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">¿Seguro que deseas eliminar el producto?</h2>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onRequestClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
