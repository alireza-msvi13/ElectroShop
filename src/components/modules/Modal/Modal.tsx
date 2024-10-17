import React, { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
}

export default function Modal({ children, onClose , onSubmit }: ModalProps) {
  return (
    <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center h-full flex">
      <div onClick={onClose} className="absolute inset-0 bg-mainBlack opacity-[0.7]"></div>

      <div className="relative w-full max-w-md px-4 h-auto">
        <div className="bg-white rounded-lg shadow relative">
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl px-4 py-2 ml-auto inline-flex items-center"
            >
              X
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
