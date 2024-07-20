import React from 'react'

function GridContainer() {
  return (
    <div className='flex items-center w-full min-h-[400px] bg-primary-100 rounded-lg px-2'>
          <div className='justify-center items-center flex-1'><h1 className='text-xl'>Grid</h1></div>
          <div className='h-14 w-2 bg-primary-600 rounded-lg hover:bg-primary-700 hover:cursor-col-resize'></div>
    </div>
  )
}

export default GridContainer
