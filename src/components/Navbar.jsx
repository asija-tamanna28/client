// import React, { useState } from 'react';
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Check if the current route is the Home page for internal links
//   const isHomePage = location.pathname === "/";
// // import {Link} from'react-router-dom';
// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

//   return (
//     <header>
//       {/* pre-navbar */}
//       <div className="bg-teal-800 text-gray-100 py-2 px-6 flex justify-between items-center text-sm hidden md:flex fixed top-0 w-full z-50">
//         <div className="flex items-center space-x-4">
//           <i className="fas fa-map-marker-alt"></i>
//           <span>SCO-2433-34, 2nd Floor, Sector 22c Chandigarh, 160022</span>
//         </div>
//         <div className="flex space-x-4">
//           <a
//             href="https://www.facebook.com/Myvisapointimmigration/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white"
//           >
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/my-visa-point-59b115128/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white"
//           >
//             <i className="fa-brands fa-linkedin"></i>
//           </a>
//           <a
//             href="https://www.instagram.com/myvisapoint6"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white"
//           >
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>
//       </div>

//       {/* Main navBar */}
//     <nav className="bg-white p-4 shadow-lg fixed top-0 w-full z-50 ">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-gray-800 text-xl font-bold">
//           <a href="/">
//             <img
//               src="https://ik.imagekit.io/7uve7qsipm/LOGO%20(2).png?updatedAt=1724428021795"
//               alt="Logo"
//               className="h-12 w-auto"
//             />
//           </a>
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <a href="/" className="text-gray-800 hover:text-teal-600 transition-colors">Home</a>
//           <a href="#about" className="text-gray-800 hover:text-teal-600 transition-colors">About</a>
//           <a href="#services" className="text-gray-800 hover:text-teal-600 transition-colors">Services</a>
//           <a href="#teams" className="text-gray-800 hover:text-teal-600 transition-colors">Teams</a>
//           <a href="#contact" className="text-gray-800 hover:text-teal-600 transition-colors">Contact</a>
//         </div>
//         <button
//           className="md:hidden text-gray-800 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white text-gray-800 shadow-lg transition-transform transform ${isMenuOpen ? 'scale-100' : 'scale-0'}`}
//         style={{ transition: 'transform 0.3s ease-out' }}
//       >
//         <a
//           href="#home"
//           className="block px-4 py-3 hover:bg-teal-100 transition-colors"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className="block px-4 py-3 hover:bg-teal-100 transition-colors"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           About
//         </a>
//         <a
//           href="#services"
//           className="block px-4 py-3 hover:bg-teal-100 transition-colors"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Services
//         </a>
//         <a
//           href="#teams"
//           className="block px-4 py-3 hover:bg-teal-100 transition-colors"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Teams
//         </a>
//         <a
//           href="#contact"
//           className="block px-4 py-3 hover:bg-teal-100 transition-colors"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Contact
//         </a>
//       </div>
//     </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if the current route is the Home page for internal links
  const isHomePage = location.pathname === "/";

  return (
    <header>
      {/* Pre-Navbar - Hidden on mobile */}
      <div className="bg-teal-600 text-gray-100 py-2 px-6 flex justify-between items-center text-sm hidden md:flex fixed top-0 w-full z-50">
        <div className="flex items-center space-x-4">
          <i className="fas fa-map-marker-alt"></i>
          <span>GM Plaza , Phase-7,Industrial Area, Sector 73 , Mohali,+91-8968881110</span>
        </div>
        <div className="flex space-x-4">
          
          <a
            href="https://www.linkedin.com/company/dodun-soft-solution/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/dodun.softsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-100 text-gray-800 p-4 shadow-md fixed top-0 md:top-8 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="https://ik.imagekit.io/7uve7qsipm/LOGO%20(2).png?updatedAt=1724428021795"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
            {/* <Link to="/">
              <div className="leading-tight">
                <h1 className="text-lg sm:text-xl font-bold">MY VISA POINT</h1>
                <p className="text-xs sm:text-sm">Gateway to Global Opportunities</p>
              </div>
            </Link> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
              <a href="#hero" className="hover:text-teal-600 transition-colors text-xl">
                Home
              </a>
            ) : (
              <Link to="/#hero" className="hover:text-teal-600 transition-colors text-xl">
                Home
              </Link>
            )}
            {isHomePage ? (
              <a href="#about" className="hover:text-teal-600 transition-colors text-xl">
                About
              </a>
            ) : (
              <Link to="/#about" className="hover:text-teal-600 transition-colors text-xl">
                About
              </Link>
            )}
           
                  
              
            {isHomePage ? (
              <a
                href="#Teams"
                className="hover:text-teal-600 transition-colors text-xl"
              >
                Teams
              </a>
            ) : (
              <Link
                to="/#Teams"
                className="hover:text-teal-600 transition-colors text-xl"
              >
                Teams
              </Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="hover:text-teal-600 transition-colors text-xl">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="hover:text-teal-600 transition-colors text-xl">
                Contact
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 text-gray-800 shadow-lg`}
        >
          <Link
            to="/"
            className="block px-4 py-3 hover:bg-teal-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {isHomePage ? (
            <a
              href="#about"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          ) : (
            <Link
              to="/#about"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          )}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-3 hover:bg-teal-100 transition-colors"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 bg-gray-100 w-full z-50">
                <Link
                  to="/spouse-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Spouse Visa
                </Link>
                <Link
                  to="/study-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Study Visa
                </Link>
                <Link
                  to="/top-up-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Top-Up Visa
                </Link>
                <Link
                  to="/tourist-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Tourist Visa
                </Link>
              </div>
            )}
          </div>
          {isHomePage ? (
            <a
              href="#testimonials"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
          ) : (
            <Link
              to="/#testimonials"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
          )}
          {isHomePage ? (
            <a
              href="#contact"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

