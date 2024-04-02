import React from 'react'
import heroImage from '../assets/profilepic.png'
import notebookL from '../assets/notebookL.png'
import notebookM from '../assets/notebookM.png'
import mobileR from '../assets/mobileR.png'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden md:overflow-visible' id="hero">
      <img className='hidden md:block absolute z-[-1] w-[400px] md:bottom-0 left-[-50px]' src={notebookL} alt=""></img>
      <img className='absolute z-[-1] w-[400px] md:bottom-[170px] left-[320px]' src={notebookM} alt=""></img>
      <img className='absolute z-[-1] w-[400px] md:bottom-[500px] left-[450px]' src={mobileR} alt=""></img>

      <div className='glass px-5 col-span-2 my-auto z-[-1]'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold '>
          <p className='mb-4 text-gray-500'>We are</p>
          <TypeAnimation
            sequence={[
              "Cyber Squad",
              5000,
              "Hackers",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='font-bold my-6 sm:text-lg lg:text-xl max-w-[150px] md:max-w-[600px] ml-1 text-gray-300'>
          Unleashing the power of CyberSecurity - one byte at a time
        </p>
      </div>
      <div className='absolute bottom-10 right-0 w-[400px] lg:w-[1100px]'>
        <img src={heroImage} alt=""></img>
      </div>

    </div>

  )
}

export default Hero
