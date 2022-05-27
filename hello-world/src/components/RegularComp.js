import React, { Component } from "react";

class Regular extends Component{
    render(){
        console.log("Regular Comp Render")
        return(<div>
            <h1>Regular Component {this.props.name}</h1>
        </div>)
    }
}

export default Regular