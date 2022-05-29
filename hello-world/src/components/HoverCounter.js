import React from "react";
import EnhancedCompo from "./EnhancedComp";

class HoverCounter extends React.Component{
    render(){
        const {handler,count} = this.props
        return(<div>
            <p>Hovered times : {count}</p>
            <button onMouseOver={handler}>Hover</button>
        </div>)
    }
}

export default EnhancedCompo(HoverCounter)