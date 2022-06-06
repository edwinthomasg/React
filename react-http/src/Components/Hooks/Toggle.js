import React,{useState,useEffect} from "react";
import HooksCounter from "./HooksCounter";
import MouseMove from "./MouseMove";

const Toggle = () => {
    const [show,setShow] = useState(true)
    return(<React.Fragment>
        <button onClick={() => {
            setShow(!show)
        }}>Click</button>
        {show && <MouseMove /> }
    </React.Fragment>)
}

export default Toggle