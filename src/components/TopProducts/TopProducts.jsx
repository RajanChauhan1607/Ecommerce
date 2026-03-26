import React from 'react'
import Img1 from "../../assets/shirt/Img1.avif"
import Img2 from "../../assets/shirt/Img2.webp"
import Img3 from "../../assets/shirt/Img3.webp"
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:"So good",
    },
    {
        id:2,
        img:Img2,
        title:"Printed Shirt",
        description:"Wear it once",
    },
    {
        id:3,
        img:Img3,
        title:"Women Shirt",
        description:"You will be amazed",
    },

];
const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24 '>
                <p data-aos="fade-up" className='text-sm text-orange-300'>Top Rated Products For You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold '> Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Helllooooo Lelooooo Productss.
                </p>
            </div>
            {/* body section */}
            <div 
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div
                        data-aos="zoom-in"
                        key={data.id}
                        className='rounded-2xl bg-white hover:bg-black/80 
                        hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* image section */}
                           <div className='h-[100px]'>
                            <img src={data.img} alt="" 
                            className='max-w-35 block mx-auto
                            transform -translate-y-20 group-hover:scale-105 duration-300
                            drop-shadow-md'/>
                           </div>
                           {/* details section */}
                           <div className='p-4 text-center'>
                            {/* star rating */}
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300
                            text-sm line-clamp-2'>
                                {data.description}
                            </p>
                            <button
                              onClick={() => alert("This feature is currently unavailable")}
                             className='bg-linear-to-r from-orange-200 to-orange-400 
                               transition-all duration-200 text-white py-1 px-4 rounded-full 
                               flex items-center gap-2 group'
                                >Order Now</button>

                           </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts