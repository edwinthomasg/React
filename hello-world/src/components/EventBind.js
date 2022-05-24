import React,{Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message:"Hello"
        }
        // this.buttonClick = this.buttonClick.bind(this) /**Binding inside a constructor */
    }
    // buttonClick1(){
    //     console.log(this) /**because of strict mode ,function wont be called by window object so there is no this refered peoperty here, it will return undefined */
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }
    // buttonClick(){
    //     console.log(this) 
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // } /**1st Event Binding method */
    buttonClick = ()=>{
        console.log(this) 
        this.setState({
            message:"Goodbye"
        })
    } /*4tht Event Binding method */

    render(){
        return(
            <div>
                <p>Click to change</p>
                <div>{this.state.message}</div>
                {/* <button onClick={this.buttonClick.bind(this)}>click</button> */}
                {/* <button onClick={() => this.buttonClick()}>click</button> */}
                {/* <button onClick={this.buttonClick}>click 1</button> */}
                <button onClick={this.buttonClick}>click 1</button>
            
            </div>
        )
    }
}

export default EventBind