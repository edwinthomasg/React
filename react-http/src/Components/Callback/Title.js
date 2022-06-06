import React from "react";

const Title = () => {
    console.log("title render")
    return <h1>Hello All ..</h1> 
}

export default React.memo(Title)