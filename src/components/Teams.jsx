import React from 'react';

const Teams = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-8" data-aos="fade-up">
          Our Team
        </h2>
        <p className="text-lg text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
          Meet our innovative and dedicated team members who drive our success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
            <div className="flex items-center justify-center mb-4 relative z-10">
              <img
                src="https://dodumsoftsoulutions.netlify.app/assets/TeamMem-D0Ia_c7y.png" // Replace with the URL of GurSimran's picture
                alt="GurSimran Singh"
                className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Gursimran Singh</h3>
            <p className="text-teal-300">Social Media Head</p>
          </div>
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
            <div className="flex items-center justify-center mb-4 relative z-10">
              <img
                src="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-05%20at%2012.42.12%20AM.jpeg?updatedAt=1726211089520" // Replace with the URL of Abhishek's picture
                alt="Abhishek"
                className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Shubham Sharma</h3>
            <p className="text-teal-300">Digital Marketing Head</p>
          </div>
          {/* <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
            <div className="flex items-center justify-center mb-4 relative z-10">
              <img
                src="https://dodumsoftsoulutions.netlify.app/assets/TeamLead-BDPYk2Hr.png" // Replace with the URL of Tamanna's picture
                alt="Shubham Sharama"
                className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Shubham</h3>
            <p className="text-teal-300">Digital Marketing Head</p>
          </div> */}
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
            <div className="flex items-center justify-center mb-4 relative z-10">
              <img
                src="https://dodumsoftsoulutions.netlify.app/assets/TeamLead-BDPYk2Hr.png" // Replace with the URL of Tamanna's picture
                alt="Tamanna Asija"
                className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Tamanna Asija</h3>
            <p className="text-teal-300"> Development Head</p>
          </div>
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
            <div className="flex items-center justify-center mb-4 relative z-10">
              <img
                src="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-12%20at%205.56.32%20PM.jpeg?updatedAt=1726210605495" 
                alt="Amanpreet"
                className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Amanpreet</h3>
            <p className="text-teal-300"> Client Relationship Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
