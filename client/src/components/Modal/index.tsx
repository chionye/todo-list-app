import React from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, show, close }) => {
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };
  return show ? (
    <div className='modal' onClick={close}>
      <div className='modal-content' onClick={handleModalClick}>
        {children}
      </div>
    </div>
  ) : null;
};
