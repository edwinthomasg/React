import { useState } from "react"


const useCounterCustom = (initalCount = 0) => {
    const [count,setCount] = useState(initalCount)
    let increment = () => {
        setCount(prev => prev + 1)
    }
    let decrement = () => {
        setCount(prev => prev - 1)    
    }
    let reset = () => {
        setCount(initalCount)
    }
    return [count,increment,decrement,reset]
}

export default useCounterCustom