import React,{useContext} from "react";
import { CounterContext } from "../../App";

const CmpA = () => {
    const counterObject = useContext(CounterContext)
    return(<div>
        Component A : count = {counterObject.countState}
        <button onClick={() => counterObject.countDispatch("increment")}>Increment</button>
        <button onClick={() => counterObject.countDispatch("decrement")}>Decrement</button>
        <button onClick={() => counterObject.countDispatch("reset")}>Reset</button>
    </div>)
}

export default CmpA