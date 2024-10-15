import React from 'react';

interface DeleteModalProps {
  onClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onClose, onSubmit, title }) => {
  return (
    <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center h-full flex px-8">
      <div onClick={onClose} className="absolute inset-0 bg-mainBlack opacity-[0.7]"></div>

      <div className="relative rounded-lg bg-white w-full max-w-md px-4 h-auto">
        <div className="rounded-lg shadow relative">
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl px-4 py-2 ml-auto inline-flex items-center"
            >
              X
            </button>
          </div>

          <div className="p-6 pt-0 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-20 h-20 text-red-600 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">{title}</h3>
            <button
              onClick={onSubmit}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center ml-4"
            >
              اره مطمئنم
            </button>
            <button
              onClick={onClose}
              className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center"
            >
              نه بیخیال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
