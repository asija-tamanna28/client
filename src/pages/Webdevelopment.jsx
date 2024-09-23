import React from 'react';
import Navbar from '../components/Navbar';

const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      
      {/* Main Web Development Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 py-16 bg-cover bg-center overflow-hidden relative">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://ik.imagekit.io/devhm/webDev?updatedAt=1727093334519" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to enhance readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white transition-transform transform hover:scale-105 hover:text-teal-300">
            Web Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            “A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collects contact details for future ongoing relations.”
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
            Our Tech Stack
          </h2>
          <table className="w-full mb-8 text-gray-200">
            <tbody>
              <tr>
                <th className="text-left py-2 px-4 border-b border-gray-400">Category</th>
                <th className="text-left py-2 px-4 border-b border-gray-400">Technologies</th>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-400 font-semibold">Frontend</td>
                <td className="py-2 px-4 border-b border-gray-400">Angular, React, Kendo UI</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-400 font-semibold">Backend</td>
                <td className="py-2 px-4 border-b border-gray-400">MVC, C#, Web API, Web API Core, Node.js</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-400 font-semibold">Framework</td>
                <td className="py-2 px-4 border-b border-gray-400">ASP.Net, ASP.Net Core</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-400 font-semibold">Database</td>
                <td className="py-2 px-4 border-b border-gray-400">Azure, AWS</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(0, 150, 136, 0.1)" />
            <circle cx="150" cy="150" r="70" fill="rgba(0, 150, 136, 0.1)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
