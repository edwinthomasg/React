import React, { Component } from "react";

class RefComponent extends Component
{
    constructor(){
        super()
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element)=>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    onBtnClick = () => {
        alert(`Hello ${this.inputRef.current.value}`)
    }
   render(){
    return(<div>
        <h1>Registeration Form</h1>
        <form>
            <label>Name </label>
            <input type="text" ref={this.inputRef}></input>
            <input type="text" ref={this.setCbRef}></input>
            <button onClick={this.onBtnClick}>Click</button>
        </form>
    </div>)
   }
}
/**Type 1 : by using React.createRef()
 * Type 2 : by using callback ref
 */

export default RefComponent