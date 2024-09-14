import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path, section) => {
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on a different route, navigate to the homepage first
      navigate("/");
      // After navigating, use a small delay to scroll to the section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust delay as needed for your page load time
    }
  };

  return (
    <footer className="bg-teal-600 text-white py-8 shadow-lg bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-white-600">DODUN</h2>
            <p className="mb-2">
              <a
                href="https://www.google.com/maps/place/GM+Plaza,+Phase-7,+Industrial+Area,+Sector+73,+Mohali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400"
              >
                GM Plaza, Phase-7, Industrial Area, Sector 73, Mohali
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+918968881110"
                className="text-white hover:text-teal-400"
              >
                +91 8968881110
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:dodunsoftsolutions@gmail.com"
                className="text-white hover:text-teal-400"
              >
                dodunsoftsolutions@gmail.com
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Useful Links
            </h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleNavigation("/", "about")}
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleNavigation("/", "services")}
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#teams"
                  onClick={() => handleNavigation("/", "teams")}
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleNavigation("/", "contact")}
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white hover:text-teal-800 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Our Services
            </h3>
            <ul>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/WebDevelopment" className="relative group">
                  Web Development
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/graphicDesign" className="relative group">
                  Graphic Design
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/digitalMarketing" className="relative group">
                  Digital Marketing
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/WindowsDevelopment" className="relative group">
                  Windows Development
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/PublicRelations" className="relative group">
                  PublicRelations
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://wa.me/918968881110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/dodun.softsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <div className="mt-8 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} DODUN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
