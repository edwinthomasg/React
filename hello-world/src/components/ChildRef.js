import React from "react";

let ChildRef = React.forwardRef(({name},ref)=>{
    return(<div>
        <input type="text" ref={ref}></input>
        <p>Thanks Parent handler {name}</p>
    </div>)
})

export default ChildRef