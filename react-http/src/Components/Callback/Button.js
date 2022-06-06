import React from "react";

const Button = (props) => {
    console.log("render ",props.children)
    return(<div>
      <button onClick={props.buttonHandler}>{props.children}</button>
    </div>)
}

export default React.memo(Button)