import React, { useState,useMemo } from "react";

const Counters = () => {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    let incrementOne = () => {
        setCounterOne(prev => prev + 1)
    }
    let incrementTwo = () => {
        setCounterTwo(prev => prev + 1)
    }
    let isEven = useMemo(()=> {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    },[counterOne]) 
    return(<div>
      {
          isEven ? 'even' : 'odd'
      }
       counter 1 : {counterOne}<br></br>
        <button onClick={incrementOne}>Increment 1</button>
     <br></br>
       counter 2 : {counterTwo}<br></br>
        <button onClick={incrementTwo}>Increment 2</button>
       
    </div>)
}

export  default Counters