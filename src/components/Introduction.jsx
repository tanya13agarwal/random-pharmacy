import React from 'react'
import Intro1 from "../data/Intro1.png";
import Intro2 from "../data/Intro2.png";
import Intro3 from "../data/Intro3.png";
import IntroVideo from "../data/IntroVideo.mp4";

const Introduction = () => {
  return (
    <div className='h-[966px] bg-backgroundColor1 text-white'>
        
        {/* Main Heading */}
        <div className='flex items-center justify-center font-bold text-8xl pt-12'>
            <h1 className=''>Superior Injections</h1>
        </div>

        {/* Sub Heading */}
        <div className='flex items-center justify-center text-2xl mt-7'>
            <p className=''>Accessible Care</p>
        </div>


        <div className='mx-auto'>

            {/* Images and video content */}
            <div className=' flex mt-[200px] -translate-y-[150px]'>

                <div className=' -z-25 w-[267px] h-[290px] translate-x-[250px] -translate-y-[30px]'>
                    <video controls autoplay> <source src={IntroVideo} type="video/mp4"/></video>
                </div>
                <div className='translate-x-[170px] z-30'>
                    <img src={Intro1} className=' w-[521px] h-[379px]'/>
                </div>
                <div className=' z-40 translate-x-[100px] translate-y-[40px]'>
                    <img src={Intro2} className='w-[225px] h-[297px]'/>
                </div>
                <div className=' z-50 translate-y-[200px]'>
                    <img src={Intro3} className=' w-[176px] h-[176px]'/>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center'>
                {/* Message */}
                <div className=' w-[900px] h-[120px] text-2xl'>
                    <p>Welcome to Randompharma, your trusted source for superior injections. Our products are made with the latest technologies to meet the highest industry standards. We aim to make injections more accessible to hospitals, the public, and even those in the villages through our home delivery services. Explore our site to learn more.</p>
                </div>

                {/* Learn More Button */}
                <button className='w-[145px] h-[48px] mt-10 bg-backgroundColor2 text-backgroundColor1 rounded-xl border-2 border-backgroundColor2
                hover:bg-backgroundColor1 hover:text-backgroundColor2 hover:border-backgroundColor1'>Learn More</button>

            </div>

        </div>
        
        
    </div>
  )
}

export default Introduction