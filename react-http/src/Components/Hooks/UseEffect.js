import React,{useState,useEffect} from "react";

const HooksCounterTwo = () => {
    let initialCount = 0
    const [count,incrementCount] = useState(initialCount)
    useEffect(()=>{
        document.title = `You clicked ${count} times.`
    })
    return(<React.Fragment>
        {count == initialCount ? <p>Clicked {count} time.</p> : <p>Clicked {count} times.</p> }
        <button onClick={() => incrementCount(prev => prev + 1)}>Click</button>
    </React.Fragment>)
}
export default HooksCounterTwo