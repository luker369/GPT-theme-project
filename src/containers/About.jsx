import React from 'react'
import Title from '../components/Title'

const Element = ({title,text,isSpaced})=>(
  <div className={`flex flex-col md:flex-row md:items-center gap-[40px] ${!isSpaced ? 'pb-[35px]' : ""}`}>
    <div className='w-[200px]'><Title name={title} setWidth={true} /></div>
    <p className='leading-[1.7] text-[#81afdd] text-[17px]'>{text}</p>
  </div>
)

const About = () => {
  
  const aboutArr = [
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. The age and draw mrs like. Improving end distrusts may instantly"
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tender"
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst child"
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law but"
    }
  ]
  
  return (
    <div className='flex flex-col lg:flex-row gap-[50px] xl:mx-[100px] mx-[20px] md:mx-[50px] mt-[100px]'>

      <div className='text max-w-[600px]'>
        <h1 className='gradient__text font-bold text-[40px]'>The Future is Now and You Just Need to Realize It. Step into the Future Today & Make it Happen</h1>
        <p className='sub-title text-[#FF8A71] font-semibold mt-[50px]'>Request Early Access to Get Started</p>
      </div>
      
      <div className=''>
        {
          aboutArr.map((element,ind)=><Element key={ind} isSpaced={ind === aboutArr.length - 1 ? true : false} title={element.title} text={element.text} />)
        }
      </div>

    </div>
  )
}

export default About
