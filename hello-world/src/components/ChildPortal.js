import React,{Component} from "react";
import ReactDOM from 'react-dom'
class ChildPortal extends Component{
    render(){
        return ReactDOM.createPortal(
            <button onClick = {this.props.increment}>Click</button>
        ,document.getElementById("portal-root"))
    }
}

export default ChildPortal