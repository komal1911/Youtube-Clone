import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../utils/appSlice';
import { useSearchParams } from 'react-router';
const Watch = () => {
    let [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(menuClose());
    },[])
  return (
    <div className='p-12'>

      <iframe width="600" height="375" src={"https://www.youtube.com/embed/"+searchParams.get("W")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Watch
