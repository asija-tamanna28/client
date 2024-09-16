import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
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
          src="https://ik.imagekit.io/tdlebsr5e/dodun%20website%20%20(1).mp4?updatedAt=1726486076489" // Replace with your video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
