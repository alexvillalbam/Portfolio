import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:p-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50">
          <h1 className='text-3l font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-xs text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat nisi qui velit, molestiae quis ut autem aperiam fugiat fuga nobis ea ipsa sit quidem unde laudantium. Officiis, animi ipsum.</p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50">
          <h1 className='text-3l font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-xs text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat nisi qui velit, molestiae quis ut autem aperiam fugiat fuga nobis ea ipsa sit quidem unde laudantium. Officiis, animi ipsum.</p>
        </div>
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-blue-500 rounded-lg hover:bg-blue-50">
          <h1 className='text-3l font-semibold'>Project</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack</h3>
          <p className='text-xs text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat nisi qui velit, molestiae quis ut autem aperiam fugiat fuga nobis ea ipsa sit quidem unde laudantium. Officiis, animi ipsum.</p>
        </div>
      </div>

    </div>
  )
}

export default Projects