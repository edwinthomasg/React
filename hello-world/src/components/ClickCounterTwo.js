import React,{Component} from "react";

class ClickCounterTwo extends Component{
    render(){
        return(<div>
            <p>Clicked times : {this.props.count}</p>
            <button onClick={this.props.incrementHandler}>Click</button>
        </div>)
    }
}

export default ClickCounterTwo