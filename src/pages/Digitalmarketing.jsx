import React from 'react';
import Navbar from '../components/Navbar';

const DigitalMarketing = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Digital Marketing Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 py-16 bg-gradient-to-r from-teal-50 to-white overflow-hidden relative">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-600">
            Digital Marketing
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            “Your brand is what people say about you when you’re not in the room.” 
            We emphasize the active nature of consumers in this quote. Our company makes lasting positive impressions that last beyond a consumer's initial interaction.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
          <img
            src="https://ik.imagekit.io/7uve7qsipm/digital.png?updatedAt=1724425460069"
            alt="Digital Marketing"
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

      {/* Social Media Marketing Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fab fa-facebook-f text-blue-600 mr-4"></i>
          Social Media Marketing
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Social media marketing uses social media platforms like Facebook, Instagram, Twitter, LinkedIn to support marketing efforts. It highlights the role of social media as a tool to amplify and spread social behavior.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Increase Brand Awareness:</strong> Enhance visibility and recognition across all social media platforms.</li>
          <li><strong className="text-teal-600">Engage Audience:</strong> Foster a community through interactive and engaging content.</li>
          <li><strong className="text-teal-600">Drive Traffic:</strong> Direct traffic to the website and other digital assets.</li>
          <li><strong className="text-teal-600">Generate Leads:</strong> Capture potential leads for business growth.</li>
          <li><strong className="text-teal-600">Social Media Analytics:</strong>  Essential for monitoring and assessing the success of marketing efforts.</li>
          <li><strong className="text-teal-600">Google Analytics:</strong> Data-driven decisions to improve their online presence and marketing strategies.</li>
          <li><strong className="text-teal-600">Poster Analytics:</strong>visually appealing and informative posters to communicate a message, promote an event, advertise a product.</li>
        </ul>
      </section>

      {/* Search Engine Optimization (SEO) Section */}
      <section className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-search text-green-600 mr-4"></i>
          Search Engine Optimization (SEO)
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          SEO is the process of optimizing a website to rank higher in search engine results pages (SERPs) organic result.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Keyword Research:</strong> Identify and target relevant keywords.</li>
          <li><strong className="text-teal-600">On-Page SEO:</strong> Optimize meta tags, headings, content, and images.</li>
          <li><strong className="text-teal-600">Off-Page SEO:</strong> Build high-quality backlinks.</li>
          <li><strong className="text-teal-600">Technical SEO:</strong> Improve site speed, mobile-friendliness, and fix technical issues.</li>
          <li><strong className="text-teal-600">Local SEO:</strong> Optimize for local search with Google My Business and local citations.</li>
        </ul>
      </section>

      {/* Pay Per Click (PPC) Section */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-bullhorn text-red-600 mr-4"></i>
          Pay Per Click (PPC)
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Pay per click (PPC) is a widely used advertising model on various websites, including search engines. Advertisers only pay when a user clicks on their ad.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">PPC Campaigns:</strong> Use Google Ads to target specific keywords and audiences.</li>
          <li><strong className="text-teal-600">Social Media Ads:</strong> Run ads on Facebook, Instagram, LinkedIn, Twitter, etc.</li>
          <li><strong className="text-teal-600">Display Ads:</strong> Use banner ads on relevant services.</li>
          <li><strong className="text-teal-600">Budget Allocation:</strong> Allocate budget based on channel performance.</li>
        </ul>
      </section>
      {/* Photography/videography */}
      <section className="px-8 py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-8 flex items-center">
          <i className="fas fa-bullhorn text-red-600 mr-4"></i>
          Photography / Videography
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Pay per click (PPC) is a widely used advertising model on various websites, including search engines. Advertisers only pay when a user clicks on their ad.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong className="text-teal-600">Photo Shooting:</strong> Use Google Ads to target specific keywords and audiences.</li>
          <li><strong className="text-teal-600">Video Shooting:</strong> Run ads on Facebook, Instagram, LinkedIn, Twitter, etc.</li>
        
        </ul>
      </section>
    </div>
  );
};

export default DigitalMarketing;
