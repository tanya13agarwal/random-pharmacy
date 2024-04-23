import React from 'react'

const ContactUs = () => {
  return (
    <div className='ml-[25px]' id='contactUs'>
        {/* Heading */}
        <h1 className='font-bold text-3xl text-black pt-5 pb-5 '>RandomPharma</h1>
        {/* Line break */}
        <hr className='ml-5 mr-5'/>

        {/* Contact information */}
        <div className='flex justify-between items-center'>
            <div className='pl-[25px] font-semibold'>
                <p>123-456-7890</p>
                <p>info@mysite.com</p>
            </div>
            <div className='pr-[25px] font-semibold'>
                <p> 500 Terry Francine Street,</p>
                <p> 6th Floor, San Francisco,</p>
                <p> CA 94158</p>
            </div>
        </div>


        {/* contact us form */}
        <h1 className='pt-5 font-bold text-xl text-black'>For Further Enquiries, </h1>

        <form className='flex flex-col gap-5 items-center justify-center'>
              
            <label htmlFor='email' className='text-[20px] text-black'>
                Enter your email here <sup>*</sup>
            </label>
              
            <input
                className='bg-backgroundColor2 w-[280px] p-3 rounded-md'
                type='email'
                name='email'
            />
              
            <button className='w-[145px] h-[48px] bg-backgroundColor1 text-white rounded-xl border-2 border-backgroundColor1
                hover:bg-white hover:text-backgroundColor1 mb-10'>Confirm</button>
            
        </form>


    </div>
  )
}

export default ContactUs