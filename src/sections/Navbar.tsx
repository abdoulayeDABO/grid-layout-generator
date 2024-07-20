import React from 'react'
import logo from '../assets/buy-me-a-coffee.png'

function Navbar() {
  return (
    <div className='h-16 w-full z-50 shadow-sm flex items-center px-4 bg-white'>
      <h1 className='font-bold text-xl h-10 w-10 flex items-center justify-center rounded-full bg-primary-500'><span className='text-primary-900'>A</span></h1>
      <div className='flex-1'></div>
      <div className='flex gap-x-3'>
        <a className="bg-transparent hover:bg-primary-500 text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-500 hover:border-transparent rounded flex items-center gap-x-3 transition-colors ease-in-out duration-300" href='https://www.buymeacoffee.com/codelab_sn'>
            <img src={logo} height={20} width={20} alt="" />
            <p>buy me a coffe</p>
        </a>
        
        <button className="bg-transparent hover:bg-primary-500 text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-500 hover:border-transparent rounded transition-colors ease-in-out duration-300">
          About me
        </button>

      </div>
    </div>
  )
} 

export default Navbar
