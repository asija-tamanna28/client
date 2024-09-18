import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init();

    // Function to detect screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile (768px width)
    };

    // Initial check
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative h-auto mt-2 w-full flex">
      {isMobile ? (
        // Mobile layout
        <div className="relative w-full h-1/2">
          {/* Video Container */}
          <div className="flex items-center justify-center w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://ik.imagekit.io/devhm/dodun%20website%20.mp4?updatedAt=1726549330363"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : (
        // Laptop/Desktop layout
        <div className="w-full flex">
          {/* Left Section - Content */}
          <div
            className="w-full md:w-1/2 flex items-center justify-center p-8 bg-teal-100"
            data-aos="fade-right"
          >
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to Our Platform
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover the best services and solutions tailored to your needs.
                Join us today to make the most of our offerings.
              </p>
              <a
                href="#services"
                className="bg-teal-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-teal-700 transition duration-300"
              >
                Explore Now
              </a>
            </div>
          </div>

          {/* Right Section - Video */}
          <div className="w-full md:w-1/2 h-[80vh]" data-aos="fade-left">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://ik.imagekit.io/devhm/Copy%20of%20dodun%20website%20.mp4?updatedAt=1726549330961"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
