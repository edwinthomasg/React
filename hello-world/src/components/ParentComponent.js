import React,{Component} from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component{
    constructor(props){
        super()
        this.state = {
            parentName:'admin'
        }
        // this.greetHandler = this.greetHandler.bind(this)
    }
    greetHandler = (child)=>{
        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render(){
        return(<div>
            <ChildComponent handler={this.greetHandler}/>
        </div>)
    }
}

export default ParentComponent