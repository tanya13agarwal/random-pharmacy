import React from 'react'
import ProductGrid from './ProductGrid'

const ProductLine = () => {
  return (
    <div className='h-[1985px] bg-backgroundColor2 pt-[70px]'>
        {/* heading */}
        <div>
            <p className='w-[940px] h-[96px] text-backgroundColor1 font-bold text-8xl pl-[25px] whitespace-nowrap'>Our Product Line</p>
        </div>

        {/* message */}
        <div>
            {/* subheading */}
            <h1 className='w-[940px] h-[21px] font-medium text-lg pb-[70px] text-backgroundColor1 pt-[80px] pl-[25px]'>The Best of the Best</h1>
            {/* message */}
            <p className='w-[940px] h-[180px] font-bold text-3xl text-backgroundColor1 pl-[25px]'>
                Randompharma is known for having the best products in the industry. 
                We use the latest technologies and strict quality control procedures to ensure our products are of the highest quality. 
                Take a look at our current product line and get in touch to order or learn more.
            </p>
        </div>

        {/* products */}
        <ProductGrid/>

    </div>
  )
}

export default ProductLine