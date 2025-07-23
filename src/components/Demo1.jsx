import React, { useState, useMemo } from 'react'
import { nThPrime } from '../../utils/Helper';
const Demo1 = () => {
const [text,setText]=useState(0);
const [darkTheme,setDarkTheme]=useState(false);
console.log("text"+text);   
const p=useMemo(()=>{
//console.log("p"+p);
return nThPrime(text);
},[text]);
  return (
    <div className={"border-black  border h-96 w-96 "+(darkTheme && "bg-gray-900 text-white")}>
      <br/><br/>
      <button className='bg-green-400' onClick={()=>setDarkTheme(!darkTheme)}> {console.log("toggle")}Toggle</button>
            <br/><br/>

      <input type="number" value={text} onChange={(e)=>setText(e.target.value)} className={"border border-black " + (darkTheme && "bg-green-300.") }/>
            <br/><br/>

      <h1>nth Prime:{p}</h1>
    </div>
  )
}

export default Demo1
