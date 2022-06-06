import React,{useState} from "react";

const HooksCounter = () => {
    const [count,incrementCount] = useState(0)
    return(<React.Fragment>
         <p>Count Times : {count}</p>
        <button onClick={() => incrementCount(prev => prev + 1)}>Click</button>
    </React.Fragment>
   )
}

export default HooksCounter