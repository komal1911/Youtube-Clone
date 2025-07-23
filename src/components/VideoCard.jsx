import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
 const {snippet, statistics}=info;
 const {thumbnails, title, channelTitle}=snippet;
  return (
    <div className='flex flex-col items-start w-fit pl-4 pt-4 shadow-lg'>
    <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
    
      <ul className='mt-2 space-y-1 text-sm'>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard
