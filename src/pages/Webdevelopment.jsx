import React from 'react';
import Navbar from '../components/Navbar';

const WebDevelopment = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gradient-to-r from-teal-50 to-white overflow-hidden relative">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Web Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            “A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collects contact details for future ongoing relations.”
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
            Our Tech Stack
          </h2>
          <table className="w-full mb-8 text-gray-700">
            <tbody>
              <tr>
                <th className="text-left py-2 px-4 border-b">Category</th>
                <th className="text-left py-2 px-4 border-b">Technologies</th>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Frontend</td>
                <td className="py-2 px-4 border-b">Angular, React, Kendo UI</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Backend</td>
                <td className="py-2 px-4 border-b">MVC (Model-View-Controller), C#, Web API, Web API Core, Node.js</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Framework</td>
                <td className="py-2 px-4 border-b">ASP.Net, ASP.Net Core</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Database</td>
                <td className="py-2 px-4 border-b">Azure, AWS</td>
              </tr>
            </tbody>
          </table>
         
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
          <img
            src="https://ik.imagekit.io/7uve7qsipm/website.png?updatedAt=1724425548590" // Replace with the URL of your image
            alt="Web Development"
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
    </div>
  );
};

export default WebDevelopment;
