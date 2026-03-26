import React from 'react'
import Slick from "react-slick";
const Slider = Slick.default || Slick;


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import men from "../../assets/Hero/men.avif"
import women from "../../assets/Hero/women.webp"
import sale from "../../assets/Hero/sale.avif"


const Imagelist = [
    {
        id:1,
        img:men,
        title:"Upto 50% off on all Men's Wear",
        description:"Something",
    },
    {
        id:2,
        img:women,
        title:"Get Flash 30% off on Women's Wear",
        description:"Anything",
    },
    {
        id:3,
        img:sale,
        title:"Get Upto 70% off on all Products Sale",
        description:"Everything",
    }
];

const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,   
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center'>

      {/* background */}
      <div className='h-[700px] w-[700px] bg-orange-300 absolute top-[-200px] right-[-200px] rounded-3xl rotate-45'></div>

      {/* slider */}
      <div className='w-full max-w-[1200px] mx-auto px-4 relative z-10'>
        
        <Slider {...settings}>
          
          {Imagelist.map((item) => (
            
            <div key={item.id}>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 items-center'>

                {/* text */}
                <div className='flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1'>
                  
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className='text-4xl sm:text-6xl lg:text-7xl font-bold'>
                    {item.title}
                  </h1>

                  <p 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className='text-sm'>
                    {item.description}
                  </p>

                  <div 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >
                    <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-full'>
                    Order Now
                  </button>
                  </div>

                </div>

                {/* image */}
                <div className='order-1 sm:order-2 flex justify-center'>
                  
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className='relative z-10'
                  >
                    <img 
                    src={item.img}
                    alt=""
                    className='w-[280px] sm:w-[400px] lg:w-[500px] object-contain'
                  />
                  </div>

                </div>

              </div>

            </div>

          ))}

        </Slider>

      </div>
    </div>
  )
}

export default Hero