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
                href="https://maps.apple.com/place?address=Sector%2073%2C%20Mohali%2C%20160055%2C%20Punjab%2C%20India&auid=1310168722158263735&ll=30.713634%2C76.699248&q=Gm%20Plaza"
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
            <div className="flex flex-col items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27441.16570080962!2d76.66208824532526!3d30.714303780884634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee584d0f0095%3A0x955e87261dd4732!2sPhase%207%2C%20Industrial%20Area%2C%20Sector%2073%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1726477973351!5m2!1sen!2sin"
            className="w-full md:w-128 h-32 border-0 rounded-lg shadow-lg mt-2"
            title="Google Map"
            loading="lazy"
            
            allowFullScreen
          ></iframe>
        </div>
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
