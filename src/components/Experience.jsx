import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col itemsc items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className='flex flex-col gap-0'>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Business Solutions Support & Implementation Specialist – ImagineSOFT</h3>
          <p className='font-light text-lg text-gray-600'>Aug 2025 – Current</p>
          <p className='text-sm text-gray-600'>
            <ol>
              <li>Supporting and customizing enterprise apps (ERP, HR, Finance).</li>
              <li>Optimized SQL/C# apps for performance.</li>
              <li>Trained staff and delivered on-site client support.</li>
              <li>Adapted solutions across industries (distribution, finance, manufacturing, etc.).</li>
            </ol>
          </p>
          <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Software Developer – Tribunal Superior de Justicia Electoral</h3>
          <p className='font-light text-lg text-gray-600'>Aug 2024 – Aug 2025</p>
          <p className='text-sm text-gray-600'>
            <ol>
              <li>Modernized legacy FoxPro apps into modern web tech (React, JS, HTML/CSS).</li>
              <li>Mentored team on Git workflows and clean code.</li>
              <li>Improved database queries and UI reliability for institutional systems.</li>
            </ol>
          </p>
          <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Software Developer Intern – Tribunal Superior de Justicia Electoral</h3>
          <p className='font-light text-lg text-gray-600'>Mar 2024 – Jul 2024</p>
          <p className='text-sm text-gray-600'>
            <ol>
              <li>Built a React + PostgreSQL electoral data query tool.</li>
              <li>Helped citizens and staff easily find voting locations.</li>
              <li>Trained coworkers to maintain and expand the system.</li>
            </ol>
          </p>
          <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-blue-500'></span>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
      </div>
  )
}

export default Experience