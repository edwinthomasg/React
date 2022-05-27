import React, { Component } from "react";
import Regular from "./RegularComp";
import Pure from "./PureComp";
import MemoComponent from "./MemoComp"
let count = 0
class Parent extends Component{
    
    constructor(){
        super()
        this.state = {
            name : count
        }
        
    }
    componentDidMount(){
        
        setInterval(()=>{
            this.setState({
                name:count
            })
        },1000)
    }
    render(){
        console.log("*************** Parent Comp Render ********************")
        return(<div>
            <h1>Parent Component</h1>
            {/* <Regular name={this.state.name}></Regular>
            <Pure name={this.state.name}></Pure> */}
            <MemoComponent name={this.state.name}></MemoComponent>
        </div>)
    }
}

export default Parent