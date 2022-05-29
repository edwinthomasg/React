import React,{Component} from "react";

class HoverCounterTwo extends Component{
    render(){
        return(<div>
            <p>Hovered times : {this.props.count} </p>
            <button onMouseOver={this.props.incrementHandler}>Hover</button>
        </div>)
    }
}

export default HoverCounterTwo