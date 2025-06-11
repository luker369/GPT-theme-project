import React from 'react'
import blogData from '../data/blog'

const BlogChild = ({data})=>(

  <div className={`relative footer-color ${data.id === 1 ? 'row-span-2 min-h-[600px] md:min-h-[450px]' : 'min-h-[550px]'}`}>
    <img src={data.image} alt='Blog' />

    <div className='text p-[20px]'>

      <h3 className='font-semibold mb-[20px]'>{data.date}</h3>
      <h2 className='font-bold text-[25px]'>{data.title}</h2>

    </div>
    
    <a href='#' className='absolute bottom-[20px] left-[20px]'>Read Article</a>

  </div>
)


const Blog = () => {

  console.log(blogData)
  return (
    <div className='mt-[100px] mx-[20px] sm:mx-[100px]'>
      <h1 className='text-[40px] sm:text-[60px] gradient__text font-bold max-w-[700px] mb-[40px]'></h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        {
          blogData.map(blog=><BlogChild key={blog.id} data={blog} />)
        }
      </div>
     
    </div>
  )
}

export default Blog
