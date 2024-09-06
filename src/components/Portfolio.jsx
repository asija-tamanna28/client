import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-16 px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8" data-aos="fade-up">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-700 mb-12" data-aos="fade-up" data-aos-delay="200">
          Here’s a glimpse of what we’ve accomplished. Our dedicated team has worked hard to deliver exceptional results for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-right" data-aos-delay="300">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-smile text-blue-500 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600">232+</h3>
            <p className="text-lg text-gray-600">Happy Clients</p>
            <p className="text-gray-500">Delivering satisfaction with every project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-project-diagram text-blue-500 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600">521+</h3>
            <p className="text-lg text-gray-600">Projects</p>
            <p className="text-gray-500">Turning visions into reality, one project at a time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-left" data-aos-delay="500">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-clock text-blue-500 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600">1463</h3>
            <p className="text-lg text-gray-600">Hours Of Support</p>
            <p className="text-gray-500">Always here to assist and ensure smooth operations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-users text-blue-500 text-4xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600">15</h3>
            <p className="text-lg text-gray-600">Hard Workers</p>
            <p className="text-gray-500">A dedicated team committed to excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
