import React from 'react'

let ChildComponent = (props)=>{
    return(<div>
       
        <button onClick={() => props.handler('child')}>Click Me</button>

    </div>)
}

export default ChildComponent