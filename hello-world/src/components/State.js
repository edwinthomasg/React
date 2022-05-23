import React,{Component} from "react";

class StateComp extends Component{
    constructor(){
        super()
        this.state = {
            message:"Click Below Button"
        }
    }
    changeMessage(){
        this.setState({
            message:"Successfully clicked"
        })
    }
    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Click</button>
        </div>)
    }
}

export default StateComp