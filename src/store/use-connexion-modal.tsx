import React, { ReactNode, MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const handleInsideClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg"
        onClick={handleInsideClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
