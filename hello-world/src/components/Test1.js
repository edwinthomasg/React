import React,{Component} from 'react'
import Modal from './Modal'
class Test1 extends Component{
    constructor(){
        super()
        
    }
   
    render(){
        let frag = {
            backgroundColor : "red",
            maxHeight : "200px",
            width : "300px",
            marginLeft : "200px",
            marginTop : "50px"
        }
        return(<div style={frag}>
            <button>Show Modal</button>
            <Modal>
            A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.A typical use case for portals is when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.
            </Modal>
        </div>
        )
    }
}

export default Test1