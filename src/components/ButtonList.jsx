import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list=["All", "Music", "Mixes", "Javascript", "News", "Podcasts", "BalGanesh", "Live", "T-Series"];
  return (
    <div className='flex'>
      {list.map((name, index) =>(
       <Button key= {index} name={name}/>
      ))}
     
    </div>
  )
}

export default ButtonList
