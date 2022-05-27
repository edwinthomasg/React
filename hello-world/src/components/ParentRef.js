import React,{Component} from 'react'
import ChildRef from './ChildRef'
class ParentRef extends Component{
    constructor(){
        super()
        this.parentRef = React.createRef()
        this.state = {
            name:"Kohli"
        }
    }
    buttonHandler = ()=>{
        this.parentRef.current.focus()
    }
    render(){
        return(<div>
            <ChildRef ref={this.parentRef} name={this.state.name}></ChildRef>
            <button onClick={this.buttonHandler}>Click</button>
        </div>)
    }
}

export default ParentRef