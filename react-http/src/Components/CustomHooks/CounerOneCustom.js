import React from "react";
import useCounterCustom from "./CounterCustom";
const CounterOneCustom = () => {
    const [count,increment,decrement,reset] = useCounterCustom()
        return(<div>
            count : {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>)
}

export default CounterOneCustom