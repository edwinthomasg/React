import React,{useEffect, useState} from 'react'

const CustomHook = () => {
    const [count,setCount] = useState(0)
    useEffect(() => {
        document.title = `count : ${count}`
    },[count])
    let buttonHandler = () => {
        setCount(prev => prev + 1)
    }
    return(<div>
    Count : {count}
    <button onClick={buttonHandler}>Click</button>
    </div>)
}

export default CustomHook