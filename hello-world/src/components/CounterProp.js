import React,{Component} from "react";

class CounterProp extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    incrementHandler = ()=>{
        this.setState(prevState => {
            return {
                 count : prevState.count + 1
            }
        })
    }
    render(){
        return(<div>
            {this.props.render(this.state.count,this.incrementHandler)}
        </div>)
    }
}

export default CounterProp