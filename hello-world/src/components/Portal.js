import React, { Component } from "react";
import ReactDOM from 'react-dom'
class PortalComponent extends Component{
    render(){
        return ReactDOM.createPortal(
        <h1>Portal Component Here ...</h1>,
        document.getElementById("portal-root"))
    }
}

export default PortalComponent