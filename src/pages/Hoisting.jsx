import React from 'react';
import Navbar from '../components/Navbar';

const Hoisting = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Hosting Overview Section */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between min-h-96 px-8 py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://ik.imagekit.io/devhm/WhatsApp%20Image%202024-09-23%20at%205.43.08%20PM.jpeg?updatedAt=1727093637053')" }}
      >
        {/* Left Section: Introduction */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Website Hosting Solutions
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            Our reliable hosting services provide a solid foundation for your website, ensuring fast performance and round-the-clock availability. Whether you're launching a small blog or managing a large-scale enterprise site, we’ve got you covered.
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

      {/* Website Hosting Details Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-server text-pink-600 mr-4"></i>
          Reliable Web Hosting
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Choose a hosting solution that grows with your business. We offer everything from shared hosting for smaller sites to VPS and dedicated servers for high-traffic websites.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Fast Performance:</strong> Enjoy quick load times, ensuring visitors stay engaged with your content.</li>
          <li><strong className="text-teal-600">24/7 Support:</strong> Get assistance whenever you need it, no matter your time zone.</li>
          <li><strong className="text-teal-600">Scalable Plans:</strong> Upgrade easily as your website traffic and demands increase.</li>
          <li><strong className="text-teal-600">Secure Infrastructure:</strong> Trust our robust security measures to keep your data safe.</li>
        </ul>
      </section>

      {/* Cloud Hosting and Databases Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-cloud text-blue-600 mr-4"></i>
          Cloud Hosting & Databases
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Experience the flexibility of cloud hosting with powerful databases designed for dynamic web applications. Scale your resources in real-time and benefit from the flexibility of cloud computing.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">High Availability:</strong> Keep your website up and running, even during peak traffic.</li>
          <li><strong className="text-teal-600">Automatic Backups:</strong> Never worry about losing data with regular, automated backups.</li>
          <li><strong className="text-teal-600">Global Reach:</strong> Use cloud servers strategically placed around the world for optimal performance.</li>
          <li><strong className="text-teal-600">Database Management:</strong> Benefit from managed cloud databases that support your website’s complex data needs.</li>
        </ul>
      </section>

      {/* File Storage and Backups Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-hdd text-red-600 mr-4"></i>
          File Storage & Backups
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Safeguard your website data with our secure file storage and backup solutions. Ensure that your valuable files are accessible and protected.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Redundant Storage:</strong> Protect your data with multiple copies stored across secure locations.</li>
          <li><strong className="text-teal-600">Instant Recovery:</strong> Recover files quickly if disaster strikes, minimizing downtime.</li>
          <li><strong className="text-teal-600">Scalable Storage:</strong> Expand your storage capacity as your website grows, without hassle.</li>
          <li><strong className="text-teal-600">Daily Backups:</strong> Ensure your data is backed up daily, with easy access to restore points.</li>
        </ul>
      </section>

      {/* Email Hosting Services Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-envelope text-blue-600 mr-4"></i>
          Professional Email Hosting
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Enhance your business communications with professional email hosting. Get personalized email addresses using your domain name and advanced email security to protect your messages.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Custom Domains:</strong> Create branded email addresses for a professional touch.</li>
          <li><strong className="text-teal-600">Spam Protection:</strong> Block unwanted emails and focus on what matters.</li>
          <li><strong className="text-teal-600">Secure Email Access:</strong> Access your emails securely from any device, anywhere.</li>
          <li><strong className="text-teal-600">24/7 Support:</strong> Our team is available around the clock to help with any issues.</li>
        </ul>
      </section>
    </div>
  );
};

export default Hoisting;
