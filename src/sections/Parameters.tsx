import React from 'react'

function Parameters() {
  return (
    <div className='flex flex-row gap-x-8 mb-4'>
     <div className='flex flex-row gap-x-3'>
        <p className='text-2xl font-semibold rounded-lg border p-2 border-primary-300'>Column</p>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
        </button>
        <div className='text-2xl rounded-lg flex items-center justify-center'><span>2</span></div>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg className="w-4 h-4" fill='currentColor' viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </button>   
    </div>
          
    <div className='flex flex-row gap-x-3'>
        <p className='text-2xl font-semibold rounded-lg border p-2 border-primary-300'>Column gap</p>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
        </button>
        <div className='text-2xl rounded-lg flex items-center justify-center'><span>2</span></div>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg className="w-4 h-4" fill='currentColor' viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </button>   
          </div>
          
     <div className='flex flex-row gap-x-3'>
        <p className='text-2xl font-semibold rounded-lg border p-2 border-primary-300'>Row gap</p>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><path d="M5 12h14"/></svg>
        </button>
        <div className='text-2xl rounded-lg flex items-center justify-center'><span>2</span></div>
        <button className="inline-flex items-center justify-center w-12 text-primary-100 transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-800">
         <svg className="w-4 h-4" fill='currentColor' viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
        </button>   
          </div>
          
    </div>
  )
}

export default Parameters
