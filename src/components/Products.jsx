import React from 'react'

import pro1 from "../data/pro1.png"
import pro2 from "../data/pro2.png"
import pro3 from "../data/pro3.png"


const cards = [
    {
        image: pro1,
        heading:"Pediatric Antibiotic Injection",
        price:"₹250.00",
    },
    {
        image: pro2,
        heading:"Broad Spectrum Antibiotic Injection",
        price:"₹310.00",
    },
    {
        image: pro3,
        heading:"Long Acting Antibiotic Injection",
        price:"₹145.00",
    },
]

const Products = () => {
  return (
    <div className='bg-backgroundColor1 h-full pr-[25px] pl-[25px] pt-[80px]' id='products'>

        <div className='flex items-center justify-center font-bold text-8xl pt-12 text-white pb-12'>
          Our Products
        </div>

        <div className='flex items-center gap-10 justify-evenly'>
          {
            cards.map((card , index) => (
              <div key={index} className='border border-white hover:shadow-lg hover:shadow-white'>
                <img
                  src={card.image} className='w-[480px] h-[480px]'
                />
                <div className='flex flex-col justify-center items-center gap-2 pb-2 pt-2'>
                  <p className='text-white'>
                    {card.heading}
                  </p>
                  <div className='border-b-[2px] text-white w-[40px]'></div>
                  <p className='text-white'>
                    {card.price}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

        <div className='flex justify-center items-center pt-[25px]'>
            <button className='w-[145px] h-[48px] bg-backgroundColor2 text-backgroundColor1 border-2 border-backgroundColor2
            hover:bg-backgroundColor1 hover:text-backgroundColor2 hover:border-backgroundColor1 
            mb-[100px]'>Learn More</button>
        </div>


      </div>
  )
}

export default Products