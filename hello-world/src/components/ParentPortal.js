import React,{Component} from "react";
import ChildPortal from "./ChildPortal";

class ParentPortal extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return(<React.Fragment>
            <p>Count : {this.state.count} !</p>
            <ChildPortal increment = {this.increment}></ChildPortal>
        </React.Fragment>)
    }

}

export default ParentPortal