import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl font-semibold mb-8">Our Companies Tie Ups</h3>
                
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/1%20(2).png?updatedAt=1726156895517"
                            alt="Anil Narula institute"
                            className="h-32 sm:h-36 md:h-40 mx-auto w-auto"
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/5%20(2).png?updatedAt=1726156893929"
                            alt="ina"
                            className="h-32 sm:h-36 md:h-40 mx-auto w-auto"
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/2%20(1).png?updatedAt=1726156892101"
                            alt="beaso"
                            className="h-32 sm:h-36 md:h-40 mx-auto w-auto"
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/4%20(1).png?updatedAt=1726156890496"
                            alt="microzoone"
                            className="h-32 sm:h-36 md:h-40 mx-auto w-auto"
                        />
                    </div>
                    <div>
                        <img
                            src="https://ik.imagekit.io/6oa6qejxe/3%20(3).png?updatedAt=1726156828228"
                            alt="MY visa point"
                            className="h-32 sm:h-36 md:h-40 mx-auto w-auto"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PortfolioSection;
