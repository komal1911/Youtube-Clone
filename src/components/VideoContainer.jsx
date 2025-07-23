import React, { useState } from 'react'
import { useEffect } from 'react';
import { youtube_video_api } from '../../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router';
const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  const getVideos=async()=>{
    const data= await fetch(youtube_video_api);
    const json=await data.json();
    console.log(json.items);
    setVideos(json.items);
    
  }
  useEffect(()=>{
        getVideos();
      },[]);
      
  return(
    <div className='flex flex-wrap'>
      {videos.map((video)=>
      <Link key={video.id} to={"/watch?W"+video.id}><VideoCard key={video.id} info={video}/></Link>
      )}
    </div>
  )
}

export default VideoContainer
