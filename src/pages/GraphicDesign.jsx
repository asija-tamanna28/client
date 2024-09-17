import React from 'react';
import Navbar from '../components/Navbar';

const GraphicDesign = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Graphic Design Section */}
      <section
        className="flex flex-row lg:flex-row items-center justify-between min-h-96 px-8 py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-13%20at%2012.43.59%20PM.jpeg?updatedAt=1726211808544')" }}
      >
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Graphic Designing
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            “There is no such thing as a boring project. There are only boring executions.” We believe every project is unique, requiring special attention to meet client expectations.
          </p>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="rgba(0, 150, 136, 0.1)" />
            <circle cx="150" cy="150" r="70" fill="rgba(0, 150, 136, 0.1)" />
          </svg>
        </div>
      </section>

      {/* Additional Graphic Design Content Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-palette text-pink-600 mr-4"></i>
          Creative Visual Design
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          In graphic design, creativity is key. We bring your ideas to life with visually stunning designs that capture attention and communicate your message effectively.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Logo Design:</strong> Craft unique logos that represent your brand's identity.</li>
          <li><strong className="text-teal-600">Brand Identity:</strong> Develop cohesive brand elements that resonate with your audience.</li>
          <li><strong className="text-teal-600">Print Design:</strong> Create visually appealing brochures, flyers, and posters.</li>
          <li><strong className="text-teal-600">Web Design:</strong> Design user-friendly and aesthetically pleasing websites.</li>
        </ul>
      </section>

      {/* UX/UI Design Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-user-friends text-blue-600 mr-4"></i>
          UX/UI Design
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our focus on user experience (UX) and user interface (UI) design ensures that your digital products are both functional and visually appealing.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">User Research:</strong> Conduct research to understand user needs and preferences.</li>
          <li><strong className="text-teal-600">Wireframing:</strong> Create wireframes to map out the structure of your digital product.</li>
          <li><strong className="text-teal-600">Prototyping:</strong> Develop interactive prototypes to test and refine designs.</li>
          <li><strong className="text-teal-600">Visual Design:</strong> Implement a visually coherent design system across all interfaces.</li>
        </ul>
      </section>

      {/* Motion Graphics Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-video text-red-600 mr-4"></i>
          Motion Graphics
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Motion graphics bring your story to life. We create engaging animations that convey complex ideas in a simple and entertaining way.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Animated Videos:</strong> Produce compelling animated videos to explain your products or services.</li>
          <li><strong className="text-teal-600">Title Sequences:</strong> Design dynamic title sequences for video content.</li>
          <li><strong className="text-teal-600">Interactive Content:</strong> Develop interactive content to engage users on digital platforms.</li>
          <li><strong className="text-teal-600">Social Media Graphics:</strong> Create animated graphics optimized for social media platforms.</li>
        </ul>
      </section>
    </div>
  );
};

export default GraphicDesign;
