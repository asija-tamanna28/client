import React from 'react';

const PublicRelations = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-40 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Public Relations</h1>

        <section className="mb-6">
          
          <p className="text-lg text-gray-700 leading-relaxed">
           Dodun offers public relations (PR) services:
          </p>
        </section>

        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1.Dedicated PR Services Section</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
           we have Created a separate page or section titled “Public Relations Services" where we are  managing  press releases, media outreach, brand reputation management, crisis communication, and social media PR.
          </p>
         
        </section> */}

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">PR Expertise</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
         “Dodun offers expert PR services to help businesses build their brand reputation, manage communications, and connect with their audience effectively.”
          </p>
         
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Service Offerings</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          we have  Clearly listed  the PR services we provide, such as:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li><strong>Media Relations:</strong>  Connecting our brand with the press for coverage..</li>
            <li><strong>Crisis Management:</strong> Managing any potential brand crises with professional communication strategies..</li>
            <li><strong>Reputation Management:</strong>Monitoring and improving public perception.</li>
            <li><strong>Content Creation:</strong> Writing and distributing press releases, articles, and brand stories.</li>
            <li><strong>Social Media PR:</strong> Building a positive online presence and managing influencer relations.
            </li>
          </ul>
        </section>

        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Call-to-Actions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
         we  Encourage clients to “Get in Touch with Our PR Team” for a consultation, and  highlighting how Dodun can elevate their brand’s public image.
          </p>
        </section> */}

        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5.PR Team Spotlight</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          Introduce your PR team members on the site with a brief description of their expertise, adding credibility and personality.
          </p>
        </section> */}

       
      </div>

      <a
            href="#Contact"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none"
          >
            Contact
          </a>
    </div>
  );
};

export default PublicRelations;
