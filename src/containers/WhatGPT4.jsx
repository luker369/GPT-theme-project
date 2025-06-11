import React from 'react'
import dropbox from '../assets/dropbox.png'
import google from '../assets/google.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'


const WhatGPT4 = () => {
  const companies = [
  {
    src: dropbox,
    name: 'dropbox'
  },
  {
    src: google,
    name: 'google'
  },
  {
    src: shopify,
    name: 'shopify'
  },
  {
    src: slack,
    name: 'slack'
  },
  {
    src: atlassian,
    name: 'atlassian'
  },

  ]

  return (
    <div className='flex flex-wrap justify-center gap-[30px] mt-[50px]'>
      {
        companies.map((company,ind)=>(
          <img 
          key={ind} 
          src={company.src} 
          alt={company.name}
          className='w-[100px] object-contain' />)
        )
      }
    </div>
  )
}

export default WhatGPT4
