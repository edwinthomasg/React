import React from "react";

function Person({person}){
    
    return(<div>
        <h1>I am {person.name}.I am {person.age} years young.I live in {person.location}.</h1>
        </div>)
}

export default Person