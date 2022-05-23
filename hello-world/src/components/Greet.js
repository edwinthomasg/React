import React from 'react'

let Greet = (props)=> {
    const {name,children} = props
    return(<div>
        <h1>Hi {name}, Greetings.</h1>
        <h2>Child Content : {children} </h2>
    </div>
    ) /**It returns only one element , so wrap all nested elements with on div */
}

export default Greet