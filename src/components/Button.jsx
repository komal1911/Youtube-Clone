import React from 'react'

const Button = ({name}) => {
    
  return (
    <div className='rounded-lg bg-gray-400 px-3 py-2 mr-4' >
      <button>{name}</button>
    </div>
  )
}

export default Button
