import { useState } from "react";

const Demo2=()=>{
    let x=0;
    console.log(x);
    const [state, setState]=useState(0);
    return(
        <div className="border border-black h-96 w-96 p-10">
        <button className="bg-slate-400" onClick={()=>x=x+1}>Increase x</button><span className="pl-5 font-bold text-xl">let={x}</span>
        <br/> <br/>
        <button className="bg-slate-400" onClick={()=>setState(state+1)}>Increase y</button><span className="pl-5 font-bold text-xl">state={state}</span>
         <br/> <br/>
        <button className="bg-slate-400">Increase Ref</button><span className="pl-5 font-bold text-xl">Ref=</span>
        </div>
    )
}
export default Demo2;