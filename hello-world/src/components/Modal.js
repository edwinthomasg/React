import React,{Component} from "react";
import ReactDOM from 'react-dom'
class Modal extends Component{
    render(){
        let styles = {
            backgroundColor : "gray",
            height : "300px",
            width : "300px",
            marginLeft : "200px"
        }
        return ReactDOM.createPortal(<React.Fragment>
            <p style={styles}>{this.props.children}</p>
            <button>Close</button>
        </React.Fragment>,document.getElementById("portal-root"))
    }
}

 export default Modal