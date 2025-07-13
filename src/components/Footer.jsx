import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 mt-10 bg-blue-100 shadow-inner relative">
      <p className="text-gray-700 text-lg flex items-center justify-center gap-3">
        Made by {""}

        <img src="https://github.com/favicon.ico" alt="github" className="w-5" />
        
        <a
          href="https://github.com/shiven0nly"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Shiven
        </a>
        
      </p>
    </footer>
  );
};

export default Footer;
