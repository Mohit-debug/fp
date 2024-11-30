import React from 'react';
// import { Close_Square } from '../assets/svg';
// import toast, { Toaster } from 'react-hot-toast';
const Modal = {};
const Container = ({ children }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div 
      className="bg-[rgba(0,0,0,0.7)] flex justify-center items-center rounded-[19px] p-4 px-10 overflow-y-auto bg-gradient-to-b from-[#090909be] via-[#34133a] to-[#050504ae] border border-white
        transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-[#1a1a1abe] hover:via-[#4e1c5c] hover:to-[#1a1a1aae]"
      onClick={stopPropagation}
    >
      {children}
    </div>
  );
};

const ModalTeamContainer = ({ children, onClose }) => {
  // Function to handle outside click
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={handleOutsideClick} // Close modal on outside click
    >
      <div
        className="relative bg-white rounded-lg shadow bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530] w-4/5 h-4/5 max-h-[90vh] max-w-[60vw] overflow-y-auto scrollbar-hide"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:bg-gray-200 rounded-full p-2"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-content p-8 text-left space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ModalContainer = ({ children, onClose }) => {
  // Function to handle outside click
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick} // Close modal on outside click
    >
      <div
        className="relative bg-white rounded-lg shadow bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530] w-4/5 h-4/5 max-h-[70vh] max-w-[80vw] overflow-y-auto scrollbar-hide"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:bg-gray-200 rounded-full p-2"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-content p-8 text-left space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ModalContainerforpdf = ({ children, onClose }) => {
  // Function to handle outside click
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick} // Close modal on outside click
    >
      <div
        className="relative bg-white rounded-lg shadow bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530] w-4/5 h-4/5 max-h-[70vh] max-w-[80vw] overflow-y-auto scrollbar-hide"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:bg-gray-200 rounded-full p-2"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-content p-8 text-left space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const CardForm = ({ children, onSubmit, title, onClose, gap, maxWidth }) => {
  return (
    <div
      className={`card w-full ${
        maxWidth ? `max-w-[${maxWidth}px]` : 'max-w-[400px]'
      } rounded-[19px] p-4  overflow-y-auto bg-gradient-to-b from-[#090909be] via-[#4c4c4c] to-[#050504ae]`}
      onSubmit={onSubmit}
      style={{
        maxWidth: maxWidth ? maxWidth : 700 + 'px'
      }}
    >
      <div className="flex justify-between pb-6">
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>{' '}
      <div className={`flex flex-col gap-${gap}`}>{children}</div>
    </div>
  );
};

Modal.Container = Container;
Modal.CardForm = CardForm;
Modal.ModalContainer = ModalContainer;
Modal.ModalContainerforpdf = ModalContainerforpdf;
Modal.ModalTeamContainer = ModalTeamContainer;

export default Modal;