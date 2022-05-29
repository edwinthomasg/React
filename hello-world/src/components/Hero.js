import React from 'react'

function Hero({name}) {
        if(name === "Vadivelu")
        throw new Error("Oops !! Something went wrong ...")
        else
        return(<p>{name}</p>)
    }


export default Hero