import React from 'react'
import peopleImg from '../assets/people.png'
import ai from '../assets/ai.png'

const Hero = () => {
  return (
    <div className='bg__gradient flex flex-col xl:flex-row items-center gap-[30] xl:gap-[30] p-[20px] sm:p-[50px]'>
      
      <div className='text basis-1/2'>

        <h1 className='gradient__text font-bold text-[40px] md:text-[65px]'>Let's Build Something amazing with GPT-4 OpenAI</h1>

        <p className='text-[#81afdd] text-[20px] leading-[1.7] my-[20px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Some more lorem ipsum while travelling assistance indulgenc unpleasing. Not thoughts all exercise blessing.</p>

        <div className='flex flex-col md:flex-row w-full mb-[20px]'>
          <input 
          type='email' 
          placeholder='Your Email'
          className='block border-none outline-none email input' />
          
          <button className='w-full h-[60px] mt-[15px] md:mt-0 md:h-auto md:w-[100px] bg-red-500 text-white grid place-items-center'>Get Started</button>      
        </div>

        <div className='flex flex-col sm:flex-row gap-[10px] items-center'>
          <img src={peopleImg} alt='People' />
          <p>1,600 peole requested access in the last 24 hours</p>
        </div>

      </div>
      
      <div className='image basis-1/2 '>
        <img src={ai} alt='AI' className='pt-[30px] md:pl-[30px]'/>
      </div>

    </div>
  )
}

export default Hero
