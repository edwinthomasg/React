import React,{Component} from "react";
import Input from "./InputComp";
class ParentInput extends Component{
    constructor(){
        super()
        this.parentRef = React.createRef()
    }
    onBtnClick = ()=>{
        this.parentRef.current.focusInput()
    }
    render(){
        return(<>
        <Input ref={this.parentRef}></Input>
        <button onClick={this.onBtnClick}>Click</button>
        </>
        )

    }
}
export default ParentInput
