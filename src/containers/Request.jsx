import React from 'react'
import image from '../assets/possibility.png'


const Request = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-[50px] mt-[100px] px-[20px] sm:px-[100px]'>

      <div className='image xl:w-1/2'>
        <img className='w-full' src={image} alt='Possibility' />
      </div>

      <div className='text md:my-[auto] xl:w-1/2'>
        <h3 className='text-[#71e5ff] font-semibold mb-[30px]'>Request Early Acces to Get Started</h3>
        <h1 className='gradient__text text-[40px] md:text-[55px] font-bold'>The possibilities are beyond your imagination</h1>
        <p className='text-[#81afdd] leading-[1.7] text-[18px] md:text-[20px] my-[30px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h3 className='text-[#FF8A71] font-semibold'>Request Early Access to Get Started</h3>
      </div>

    </div>
  )
}

export default Request