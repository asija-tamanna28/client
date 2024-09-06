import React from 'react';

const Sellpoint = () => {
  return (
    <section className="py-16 px-8 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600" data-aos="fade-down">
          Why Choose Us?
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700" data-aos="fade-down">
          Welcome To DODUN Soft Solutions - Empowering Tomorrow's Technology!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-right">
            <div className="flex items-center mb-4">
              <i className="fas fa-lightbulb text-teal-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold">Innovative Solutions</h3>
            </div>
            <p>
              At Dodun Soft Solutions, we're dedicated to crafting innovative IT solutions that propel businesses forward. From cutting-edge software development to harnessing the power of emerging technologies like AI.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <i className="fas fa-user-friends text-teal-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold">Client-Centric Approach</h3>
            </div>
            <p>
              Our philosophy revolves around putting our clients at the center of everything we do. We understand that every business is unique, and tailor our services to meet their specific needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-left">
            <div className="flex items-center mb-4">
              <i className="fas fa-users text-teal-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold">Expert Team</h3>
            </div>
            <p>
              Behind every successful project at Dodun Soft Solutions is a team of seasoned professionals who are passionate about technology and dedicated to delivering excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <i className="fas fa-building text-teal-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold">Work Culture</h3>
            </div>
            <p>
              Being the best culture to work makes a big difference between being a good company and a great company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sellpoint;
