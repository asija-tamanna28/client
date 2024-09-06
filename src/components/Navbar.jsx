import React, { useState } from 'react';
import {Link} from'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-lg fixed top-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 text-xl font-bold">
          <a href="/">
            <img
              src="https://ik.imagekit.io/7uve7qsipm/LOGO%20(2).png?updatedAt=1724428021795"
              alt="Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-teal-600 transition-colors">Home</a>
          <a href="#about" className="text-gray-800 hover:text-teal-600 transition-colors">About</a>
          <a href="#services" className="text-gray-800 hover:text-teal-600 transition-colors">Services</a>
          <a href="#teams" className="text-gray-800 hover:text-teal-600 transition-colors">Teams</a>
          <a href="#contact" className="text-gray-800 hover:text-teal-600 transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white text-gray-800 shadow-lg transition-transform transform ${isMenuOpen ? 'scale-100' : 'scale-0'}`}
        style={{ transition: 'transform 0.3s ease-out' }}
      >
        <a
          href="#home"
          className="block px-4 py-3 hover:bg-teal-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="block px-4 py-3 hover:bg-teal-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#services"
          className="block px-4 py-3 hover:bg-teal-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="#teams"
          className="block px-4 py-3 hover:bg-teal-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Teams
        </a>
        <a
          href="#contact"
          className="block px-4 py-3 hover:bg-teal-100 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
