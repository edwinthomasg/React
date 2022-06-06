import React, { useState } from "react";

let count = 0
const ArrayHook = () => {
    const [items,setItem] = useState([])
    let addItem = () => {
        setItem([...items,{
            id : items.length,
            value : count++
        }])
    }
    return(<React.Fragment>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </ul>
    </React.Fragment>)
}

export default ArrayHook