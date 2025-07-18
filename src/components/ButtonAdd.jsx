import React from 'react';

const ButtonAdd = ({onClick}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <button onClick={onClick} className="relative  inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative block px-2 py-2 rounded-xl bg-gray-900">
            <div className="relative flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">Add</span>
              <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ButtonAdd;
