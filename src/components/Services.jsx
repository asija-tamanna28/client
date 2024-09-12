import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section
      className="py-16 px-8 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/7uve7qsipm/background_services.png?updatedAt=1726161203569')", // Replace with your image URL
      }}
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-8" data-aos="fade-up">
          Our Services
        </h2>
        <p
          className="text-lg text-gray-800 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore the wide range of services we offer to elevate your business and digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-teal-50 border-2 border-transparent hover:border-teal-300 overflow-hidden"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-laptop-code text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Web Development</h3>
            <p className="text-gray-700 mb-4">
              Create stunning websites that attract the right visitors and turn them into loyal customers.
            </p>
            <Link
              to="/WebDevelopment"
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div
            className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50 border-2 border-transparent hover:border-blue-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-bullhorn text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Digital Marketing</h3>
            <p className="text-gray-700 mb-4">
              Enhance your brand’s visibility and reputation with our expert digital marketing strategies.
            </p>
            <Link
              to="/digitalMarketing"
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div
            className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-teal-50 border-2 border-transparent hover:border-teal-300 overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-paint-brush text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Graphic Designing</h3>
            <p className="text-gray-700 mb-4">
              Visual designs that speak volumes about your brand’s creativity and professionalism.
            </p>
            <Link
              to="/graphicDesign"
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div
            className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50 border-2 border-transparent hover:border-blue-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-desktop text-teal-500 text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Windows Development</h3>
            <p className="text-gray-700 mb-4">
              Develop powerful and user-friendly applications for the Windows platform.
            </p>
            <Link
              to="/WindowsDevelopment"
              className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
