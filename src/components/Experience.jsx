import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col itemsc items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Experience 1</h3>
          <p className='font-light text-lg text-gray-600'>Job title</p>
          <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio sunt veritatis odit saepe cupiditate quas in tenetur natus facilis asperiores voluptatibus necessitatibus, aliquam blanditiis quae voluptatem assumenda deleniti? Facere.</p>
          </div>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Experience 1</h3>
          <p className='font-light text-lg text-gray-600'>Job title</p>
          <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, optio sunt veritatis odit saepe cupiditate quas in tenetur natus facilis asperiores voluptatibus necessitatibus, aliquam blanditiis quae voluptatem assumenda deleniti? Facere.</p>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
      </div>
  )
}

export default Experience