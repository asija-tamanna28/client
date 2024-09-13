import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSection = () => {
    const settings = {
        dots: false, // Hide the dots
        infinite: true, // Loop through the slides
        speed: 500, // Transition speed
        slidesToShow: 4, // Show 4 logos at a time
        slidesToScroll: 1,
        autoplay: true, // Automatically rotate the logos
        autoplaySpeed: 2000, // Rotate every 2 seconds
        arrows: false, // Hide the next/previous buttons
        pauseOnHover: false, // Continue rotating even when hovered
        responsive: [
            {
                breakpoint: 1024, // For tablets and smaller screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-20 text-center">
                <h3 className="text-2xl font-semibold mb-8">Our Companies Tie Ups</h3>
                
                {/* Slider for logos */}
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/1%20(2).png?updatedAt=1726156895517"
                            alt="Anil Narula institute"
                            className="h-50 mx-auto w-auto" // Increased the height to h-36
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/5%20(2).png?updatedAt=1726156893929"
                            alt="ina"
                            className="h-50 mx-auto w-auto" // Increased the height to h-36
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/2%20(1).png?updatedAt=1726156892101"
                            alt="beaso"
                            className="h-50 mx-auto w-auto" // Increased the height to h-36
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/4%20(1).png?updatedAt=1726156890496"
                            alt="microzoone"
                            className="h-50 mx-auto w-auto" // Increased the height to h-36
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/3%20(3).png?updatedAt=1726156828228"
                            alt="MY visa point"
                            className="h-50 mx-auto w-auto" // Increased the height to h-36
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PortfolioSection;
