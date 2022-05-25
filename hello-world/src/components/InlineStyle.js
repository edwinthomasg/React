import React from "react";

function InlineStyle(){
    let style = {
        fontSize : "20px",
        color : "blue",
        border : "2px solid red",
        width : "160px",
        marginLeft: "300px"
    }
    return(<div>
        <p style={style}>React Application</p>
    </div>)
}

export default InlineStyle