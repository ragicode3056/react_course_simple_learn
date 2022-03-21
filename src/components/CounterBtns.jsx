import { useState } from "react"

export const  CounterBtns = () =>{
    const[counter,setCounter] = useState(1);
    const incrementHandler = () =>{ setCounter(counter + 1)}
    let decrementCounter = () =>{ setCounter(counter - 1)};

    if(counter <= 1){
        decrementCounter = () =>{setCounter(1)};
    }

    return (
        <div className="div-btn">
            <button className="btn"onClick={incrementHandler}>+</button>
            <p>{counter}</p>
            <button className = "btn" onClick = {decrementCounter}>-</button>
        </div>
    )
}