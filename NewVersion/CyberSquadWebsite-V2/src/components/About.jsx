import React from 'react'
import notebook from '../assets/notebookM.png'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3' id="about">
      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>Who and What is Cyber Squad?</h2>
          <p className='text-gray-200'>Cyber-Squad is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt omnis praesentium, assumenda aperiam fuga, nulla aliquam sit molestias similique maxime dolorem molestiae veniam eveniet ullam. Dolorum error dignissimos vero sapiente?
          </p>
        </div>
      </div>


      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img className='w-[200px] md:w-[500px] absolute' src={notebook} />
      </div>

      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img className='w-[200px] md:w-[500px] absolute' src={mobile} />
      </div>

      <div className='md:hidden relative overflow-hidden h-[200px] glass '>
        <img className='w-[400px] absolute' src={notebook} />
        <img className='w-[200px] right-0 absolute' src={mobile} />
      </div>


      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4 '>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>Manav Rachna University</h2>
          <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores nobis aliquid amet autem ex, laudantium numquam modi inventore blanditiis magni mollitia fugit nam pariatur eos dignissimos dolorum vitae asperiores?
          </p>
        </div>
      </div>


    </div>
  )
}

export default About
