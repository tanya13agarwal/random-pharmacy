import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Products from './Products';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Navbar = () => {
  return (
    <div className='h-[90px] flex justify-between items-center bg-backgroundColor1 text-white text-xl'>

        {/* RandomPharmacy brand name */}
        <div className='ml-5 w-[195px] h-[48px] transform-x-[-150px] transform-y-[20px]'>
            <span className='w-[184px] h-[30px] transform-x-[-150px] transform-y-[33px] font-bold'>RandomPharma</span>
        </div>

        {/* Navbar links */}
        <div className='w-[588px] h-[48px] transform-x-[194px] transform-y-[20px]'>
            <div className='w-[560px] h-[30px] transform-x-[207px] transform-y-[29px]'>
                <ul className='flex justify-center items-center gap-7'>
                    <li>
                        <a href="#" className='hover:font-bold'>Home</a>
                    </li>
                    <li>
                        <a href="#products" className='hover:font-bold '>Shop</a>
                    </li>
                    <li>
                        <a href="#aboutUs" className='hover:font-bold '>About us</a>
                    </li>
                    <li>
                        <a href="#contactUs" className='hover:font-bold'>Contact us</a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Shopping cart */}
        <div className=' w-[197px] h-[48px] transform-x-[933px] transform-y-[20px]'>
            <FaShoppingCart className='flex ml-auto mr-5 w-[25px] h-[20px] transform-x-[1105px] transform-y-[34px] 
            hover:size-[25px] active:text-linkActiveColor'/>
        </div>

    </div>
  )
}

export default Navbar