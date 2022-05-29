import React,{Component} from "react";
import ComponentC from "./ComponentC";
import UserContext from "./Context";
class ComponentB extends Component{
    render(){
        return(<div>
            <ComponentC></ComponentC>
            <p>Component B says hello  to {this.context}</p>
        </div>
        )
    }
}
ComponentB.contextType = UserContext
export default ComponentB