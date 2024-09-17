import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

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
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen"> {/* Full viewport height */}
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // Ensures the video plays inline on iOS
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src={isMobile 
            ? "https://ik.imagekit.io/devhm/dodun%20website%20.mp4?updatedAt=1726549330363" // Replace with your mobile video URL
            : "https://ik.imagekit.io/devhm/Copy%20of%20dodun%20website%20.mp4?updatedAt=1726549330961"  // Replace with your laptop/desktop video URL
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
