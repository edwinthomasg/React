import React, { PureComponent } from "react";

class Pure extends PureComponent{
    render(){
        console.log("Pure Comp Render")
        return(<div>
            <h1>Pure Component {this.props.name}</h1>
        </div>)
    }
}

export default Pure