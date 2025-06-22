import React from 'react'
import Title from '../components/Title'

const Features = () => {

  const featuresArr = [
    {
      title: "Chatbots",
      text: "We so opinion friens me message as delight. Whole front do of plate heard oh ought"
    },
    {
      title: "Kowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    }
    
  ]
  return (
    <div className='gpt4__whatgpt4 px-[40px] py-[70px] mx-[20px] md:mx-[50px] lg:mx-[100px] mt-[100px]'>
      
      <div className='flex flex-wrap gap-[30px] justify-between'>

        <Title name="What is GPT-4" />

        <p className='text-[#81afdd] gap-[30] text-[18px] leading-[1.7] max-w-[600px]'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. AT jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>

      </div>

      <div className='flex items-center justify-between flex-wrap gap-[30px] mt-[100px]'>
        <h1 className='gradient__text font-bold text-[25px] sm:text-[45px] lg:max-w-[650px]'>The possibilites are beyond your imagination</h1>
        <p className='gradient__text font-bold'>Explore the Library</p>
      </div>

      <div className='mt-[100px] grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        {
          featuresArr.map((feature,ind)=>[
            <div key={ind} className=''>
              <Title name={feature.title} />
              <p className='text-[#81afdd] text-[18px] leading-[1.7] mt-[30px]'>{feature.text}</p>
            </div>
          ])
        }
      </div>

    </div>
  )
}

export default Features
