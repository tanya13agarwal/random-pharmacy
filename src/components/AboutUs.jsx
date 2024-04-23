import React from 'react'
import ProductLine from './ProductLine';

import aboutUs from '../data/aboutUs.png';
import doctor from "../data/doctor.png";


const AboutUs = () => {
  return (
    <div className='bg-backgroundColor2 h-full' id='aboutUs'>

        {/* About us header */}
        <div className='h-[262px] flex justify-between items-center pt-[100px]'>
            <p className='w-[634px] h-[96px] text-backgroundColor1 font-bold text-8xl pl-[25px]'>About Us</p>
            <img src={aboutUs} className='w-[350px] h-[300px] pr-[25px]'/>
        </div>

        {/* Message */}
        <div className='h-[684px] flex justify-between items-center pt-[100px] text-backgroundColor1'>
            {/* Image */}
            <img src={doctor} className='w-[370px] h-[360px] pl-[25px]'/>
            {/* Text Content */}
            <div className='pr-[150px] pt-[120px]'> 
                <h1 className='w-[560px] h-[21px] font-medium text-lg pb-[70px]'>Highly Trained, Highly Effective</h1>
                <p className='w-[640px] h-[360px] font-bold text-3xl'>
                    At Randompharma, we are a leader in the industry of pharmaceutical manufacturing. 
                    With over 20 years of experience, we are committed to providing quality products and innovations to a variety of companies and individuals. 
                    We stay up-to-date with the latest advancements in the industry to ensure we are meeting the needs of our customers.
                </p>
                <button className='w-[145px] h-[48px] bg-backgroundColor1 text-white rounded-xl border-2 border-backgroundColor1
                hover:bg-backgroundColor2 hover:text-backgroundColor1'>Learn More</button>
            </div>
        </div>

        <hr className='ml-[25px] mr-[25px] mt-[70px]'/>

        {/* Product line */}
        <ProductLine/>

        {/* view more button */}
        <button className='w-[145px] h-[48px] bg-backgroundColor1 text-white rounded-xl border-2 border-backgroundColor1
            hover:bg-backgroundColor2 hover:text-backgroundColor1 mb-[100px] mt-[70px] ml-[25px]'>Learn More</button>

    </div>
  )
}

export default AboutUs