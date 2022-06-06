import React from "react";
import useCounterCustom from "./CounterCustom";
const CounterTwoCustom = () => {
    const [count,increment,decrement,reset] = useCounterCustom(20)
        return(<div>
            count : {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>)
}

export default CounterTwoCustom