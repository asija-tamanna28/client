import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const Teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-8" data-aos="fade-up">
          Our Team
        </h2>
        <p className="text-lg text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
          Meet our innovative and dedicated team members who drive our success.
        </p>
        <Slider {...settings} className="team-slider">
          <div className="team-slide-item mx-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <img
                  src="https://dodumsoftsoulutions.netlify.app/assets/TeamMem-D0Ia_c7y.png"
                  alt="Gursimran Singh"
                  className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Gursimran Singh</h3>
              <p className="text-teal-300">Social Media Head</p>
            </div>
          </div>
          <div className="team-slide-item mx-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <img
                  src="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-05%20at%2012.42.12%20AM.jpeg?updatedAt=1726211089520"
                  alt="Shubham Sharma"
                  className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Shubham Sharma</h3>
              <p className="text-teal-300">Digital Marketing Head</p>
            </div>
          </div>
          <div className="team-slide-item mx-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <img
                  src="https://dodumsoftsoulutions.netlify.app/assets/TeamLead-BDPYk2Hr.png"
                  alt="Tamanna Asija"
                  className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Tamanna Asija</h3>
              <p className="text-teal-300">Development Head</p>
            </div>
          </div>
          <div className="team-slide-item mx-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500 opacity-30 transition-opacity duration-500 hover:opacity-0"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <img
                  src="https://ik.imagekit.io/6oa6qejxe/WhatsApp%20Image%202024-09-12%20at%205.56.32%20PM.jpeg?updatedAt=1726210605495"
                  alt="Amanpreet"
                  className="w-32 h-32 object-cover rounded-full border-4 border-teal-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Amanpreet</h3>
              <p className="text-teal-300">Client Relationship Manager</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Teams;
