import React,{useReducer} from "react";

const CounterObject = () => {
    const initialState = {
        firstCounter : 0,
        secondCounter : 40
    }
    let reducer = (state,action) => {
        switch(action.type){
            case 'increment' : return {...state,firstCounter : state.firstCounter + action.value}
            case 'decrement' : return {...state,firstCounter : state.firstCounter - action.value}
            
            case 'increment2' : return {...state,secondCounter : state.secondCounter + action.value}
            case 'decrement2' : return {...state,secondCounter : state.secondCounter - action.value}
            case 'reset' : return initialState
            default : return state
        }
    }
    const [count,dispatch] = useReducer(reducer,initialState)
    return(<div>
        <p>Count : {count.firstCounter}</p>
                
        <p>Count : {count.secondCounter}</p>
        <button onClick={() => dispatch({type : "increment",value : 1 })}>Increment</button>
        <button onClick={() => dispatch({type : "decrement",value : 1})}>Decrement</button>

        <button onClick={() => dispatch({type : "increment2",value : 1 })}>Increment</button>
        <button onClick={() => dispatch({type : "decrement2",value : 1})}>Decrement</button>
        <button onClick={() => dispatch({type : "reset"})}>Reset</button>
    </div>)
}

export default CounterObject