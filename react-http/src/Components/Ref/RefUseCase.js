import React,{useEffect, useRef, useState} from "react";

const RefUseCase = () => {
    const [time,setTime] = useState(0)
    let timeRef = useRef()
    useEffect(() => {
         timeRef.current = setInterval(()=>{ setTime(prev => prev + 1)},1000)
       
        return () => {
            clearInterval(timeRef.current)
        }
    },[])
    return(<div>
        Timer : {time}
        <button onClick={()=>clearInterval(timeRef.current)}>Clear</button>
    </div>)
}
export default RefUseCase