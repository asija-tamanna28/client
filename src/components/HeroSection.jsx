import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
    className="  bg-cover bg-center min-h-96 min-h-78"
    style={{
      backgroundImage: "url('https://ik.imagekit.io/6oa6qejxe/Copy%20of%20dodun%20.png?updatedAt=1726134993615')",
    }}
  >
   {/* <section className="flex flex-col lg:flex-row items-center justify-center min-h-96 bg-gradient-to-r from-teal-200 via-blue-100 to-white px-8 py-16"> */}
      {/* <div 
        className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0" 
        data-aos="fade-up"
      >
        <h1 
          className="text-3xl lg:text-4xl font-bold mb-4 text-teal-700" 
          data-aos="fade-right"
        >
          Make your ideas Executable!
        </h1>
        <p 
          className="text-base lg:text-lg mb-6 text-gray-700"
          data-aos="fade-left"
        >
          We are a team of talented designers making websites and also making a place in digital marketing!
        </p>
        <a
         href="#services"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          data-aos="zoom-in"
        >
          Know More
        </a>
      </div>
      <div 
        className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8"
        data-aos="fade-up"
      >
        <img
          src="https://ik.imagekit.io/7uve7qsipm/Untitled%20design.png?updatedAt=1724423685958" // Replace with the URL of your image
          alt="Hero"
          className="w-full h-full lg:h-80 lg:w-auto object-cover rounded-lg shadow-lg"
          data-aos="fade-left"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
