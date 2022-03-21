import { useState } from "react";
import bellA from './components/bellA.png';
import bellB from './components/bellB.png';

export const StateTech = ()=>{
    const [msg,setMsg] = useState('Subcribe to Simple Learn');
    const [btnText,setBtnMsg] = useState('Subscribe');
    const [imgSrc , setImg] = useState(bellA);

    const subcribeHandler = () =>{
        setMsg("click on bell icon");
        setBtnMsg("Subscribed");
     }
     const imgHandler = () =>{
         setImg(bellB);
         setMsg("Have a happy learning");
     }
    return ( 
        <div>
            <h3> Welcome to OFS </h3>
            <h4> {msg}</h4>
            <button onClick = {subcribeHandler}>{btnText}</button>
            <div>
                <img src = {imgSrc} onClick = {imgHandler}></img>
            </div>
            
        </div>
    )
}