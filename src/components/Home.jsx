import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>

      <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>

        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full'/>

        <div className='space-y-1 sm:space-y-3'>
          <h1 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Alex Villalba</h1>
          <h3 className='bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Web Developer</h3>
          <p className='max-w-[500px] text-sm text-gray-500'>I’m a web developer passionate about creating engaging digital experiences. I love turning ideas into real projects using React and JavaScript, and I’m constantly experimenting with new technologies to improve my craft.</p>
        </div>

        <div className='flex gap-3'>
          <a href="https://github.com/alexvillalbam" target="_blank" rel="noopener noreferrer"><BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600 md:h-12 md:w-12 '/></a>
          <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-blue-600 hover:bg-white hover:text-blue-600 md:h-12 md:w-12 '/>
        </div>
      </div>
    </div>
  )
}

export default Home