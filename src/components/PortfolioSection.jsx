import React from 'react'

const PortfolioSection = () => {
    return (
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8">Our Companies Tie Ups</h3>
            
            {/* Flex container for images, now responsive */}
            <div className="flex flex-wrap justify-around items-center space-y-6 sm:space-y-0">
              {/* Replace these img src with actual image links */}
              <img src="https://ik.imagekit.io/6oa6qejxe/1%20(2).png?updatedAt=1726156895517" 
                   alt="Anil Narula intitute" 
                   className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto"/>

              <img src="https://ik.imagekit.io/6oa6qejxe/5%20(2).png?updatedAt=1726156893929" 
                   alt="ina" 
                   className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto"/>

              <img src="https://ik.imagekit.io/6oa6qejxe/2%20(1).png?updatedAt=1726156892101" 
                   alt="beaso" 
                   className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto"/>

              <img src="https://ik.imagekit.io/6oa6qejxe/4%20(1).png?updatedAt=1726156890496" 
                   alt="microzoone" 
                   className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto"/>

              <img src="https://ik.imagekit.io/6oa6qejxe/3%20(3).png?updatedAt=1726156828228" 
                   alt="MY visa point" 
                   className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto"/>
            </div>
          </div>
        </div>
      )
}

export default PortfolioSection