import { useState } from "react";

export function ClickBtn(props){

    const [counter,setCounter] = useState(1);

    
    const clickHandler = () =>{
        setCounter(counter +1);
    }
    
    const decrementCounter = () =>{
        setCounter(counter - 1);
    }

    return (
        <div>
             <button onClick = {clickHandler}> click me</button>
             <p>increment {counter}</p>
             <p>decrement {counter}</p>
             <button onClick = {decrementCounter}>Click me</button>
        </div>
       
        
    )
}