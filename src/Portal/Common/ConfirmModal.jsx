import React from 'react';

const ConfirmModal = ({ isOpen, title, message, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-green-500 text-center">{title}</h2>
        <p className="mt-2 text-gray-600 text-center">{message}</p>
        <div className="mt-6 flex justify-center space-x-3 ">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
