import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Products from './components/Products'

const App = () => {

  return (
    <div className='w-full min-w-[980px] mx-auto overflow-auto no-scrollbar'>

      <Navbar/>
      <hr className='text-white'/>
      <Introduction/>
      <Products/>
      <AboutUs/>
      <ContactUs/>

    </div>
  )
}

export default App