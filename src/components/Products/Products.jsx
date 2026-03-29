import React from 'react'
import Img1 from "../../assets/Women/women_ethnic.avif"
import Img2 from "../../assets/Women/women_western.webp"
import Img3 from "../../assets/Women/women_goggles.webp"
import Img4 from "../../assets/Women/women_printed.avif"
import Img5 from "../../assets/Women/women_fashiontshirt.webp"
import { FaStar } from "react-icons/fa";


const Products = ({products}) => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-orange-300'>Top Selling Products For You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold '>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Helllooooo Lelooooo Productss.
                </p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {
                        products.map((data)=>(
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id} 
                            className='space-y-3'>
                                <img src={data.img} alt=""
                                className='h-[220px] w-[150px] object-cover rounded-md '/>

                                <div>
                                    <h3 className='font-semibold'>
                                        {data.title}
                                    </h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* view all button */}
            <div 
            data-aos="fade-up"
            className='flex justify-center'>
                <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-full'>
                    View All
                </button>
            </div>
        </div>
    </div>
  )
}

export default Products