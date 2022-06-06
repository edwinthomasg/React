import React,{useReducer} from "react";

const MultiReducer = () => {
    const initialState = 0
    let reducer = (state,action) => {
        switch(action){
            case 'increment' : return state + 1
            case 'decrement' : return state - 1
            case 'reset' : return initialState
            default : return state
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    const [count2,dispatch2] = useReducer(reducer,initialState)
    return(<div>
        <p>Count 1 : {count}</p>
                
        <p>Count 2 : {count2}</p>
        <button onClick={() => dispatch( "increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
    </div>)
}

export default MultiReducer