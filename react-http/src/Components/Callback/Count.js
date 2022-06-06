import React from "react";

const Count = (props) => {
    console.log("render : ",props.text)
    const {text,output} = props
    return(<div>
        {text} : {output}
    </div>)
}

export default React.memo(Count)