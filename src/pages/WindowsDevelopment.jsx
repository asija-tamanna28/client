import React from 'react';
import Navbar from '../components/Navbar';

const WindowsDevelopment = () => {
  return (
    <div>
      <Navbar />

      {/* Main Windows Development Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gradient-to-r from-teal-50 to-white overflow-hidden relative">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Windows Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            We are a team of talented designers making websites and also making a place in Windows Development! 
            We help create software applications for the Windows operating system.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
          <img
            src="https://ik.imagekit.io/7uve7qsipm/windows.png?updatedAt=1724425548512"
            alt="Windows Development"
            className="w-11/12 lg:w-4/5 h-auto max-w-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          />
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(0, 150, 136, 0.1)" />
            <circle cx="150" cy="150" r="70" fill="rgba(0, 150, 136, 0.1)" />
          </svg>
        </div>
      </section>

      {/* Additional Windows Development Content Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-laptop-code text-blue-600 mr-4"></i>
          Desktop Application Development
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We specialize in developing robust desktop applications for the Windows platform. Our applications are optimized for performance and user experience.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Custom Software Solutions:</strong> Tailor-made software that meets your specific business needs.</li>
          <li><strong className="text-teal-600">Cross-Platform Compatibility:</strong> Develop applications that work seamlessly across multiple Windows versions.</li>
          <li><strong className="text-teal-600">Integration Services:</strong> Integrate your desktop applications with other systems and platforms.</li>
          <li><strong className="text-teal-600">Maintenance and Support:</strong> Ongoing support and maintenance to keep your applications running smoothly.</li>
        </ul>
      </section>

      {/* Windows Store Apps Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-store-alt text-green-600 mr-4"></i>
          Windows Store Applications
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our expertise extends to creating Windows Store apps that are both engaging and functional. We ensure your app meets all Windows Store requirements.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">User-Friendly Design:</strong> Design intuitive and easy-to-use interfaces for better user engagement.</li>
          <li><strong className="text-teal-600">Efficient Performance:</strong> Optimize app performance for faster load times and smooth operation.</li>
          <li><strong className="text-teal-600">Security Features:</strong> Implement security protocols to protect user data and privacy.</li>
          <li><strong className="text-teal-600">Regular Updates:</strong> Provide regular updates to keep the app aligned with the latest Windows Store guidelines.</li>
        </ul>
      </section>

      {/* Cloud Integration Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-cloud text-purple-600 mr-4"></i>
          Cloud Integration
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Integrate your Windows applications with cloud services to leverage scalability, flexibility, and remote accessibility.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Azure Integration:</strong> Seamlessly integrate with Microsoft Azure for cloud computing solutions.</li>
          <li><strong className="text-teal-600">Data Synchronization:</strong> Ensure data consistency across all devices and platforms through cloud integration.</li>
          <li><strong className="text-teal-600">Remote Access:</strong> Enable users to access your applications from anywhere in the world.</li>
          <li><strong className="text-teal-600">Scalability:</strong> Scale your application resources up or down based on demand.</li>
        </ul>
      </section>
    </div>
  );
};

export default WindowsDevelopment;
