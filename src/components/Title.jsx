import React from 'react'

const Title = ({name,setWidth}) => {
  return (
    <div className={`${setWidth ? 'w-[200px] max-w-full' : ''}`}>
      <span className='feature-line'></span>
      <h1 className='font-semibold text-[20px]'>{name}</h1>
    </div>
  )
}

export default Title