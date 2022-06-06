import React,{useState,useEffect} from "react";

const MouseMove = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    let moveHandler = (event) => {
        console.log("Mouse Event")
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect Called for every rerender")
        window.addEventListener('mousemove',moveHandler)
        
        return () => {
            console.log("Component Unmounting")
            
            window.removeEventListener('mousemove',moveHandler)
        }
    },[])
    return(<React.Fragment>
        <p>x coordinate : {x},
        y coordinate : {y}</p>
    </React.Fragment>)
}

export default MouseMove