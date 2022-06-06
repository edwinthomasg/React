import React,{useState,useEffect} from "react";

const Timer = () => {
    const [count,setCount] = useState(0)
    let incrementCount = () => {
        setCount(prev => prev + 1)
    }
    useEffect(() => {
        let timer = setInterval(incrementCount,1000)
        return () => {
            console.log("Unmounted")
            clearInterval(timer)
        }
    },[])
    return(<React.Fragment>
        <p>{count}</p>
    </React.Fragment>)
}

export default Timer