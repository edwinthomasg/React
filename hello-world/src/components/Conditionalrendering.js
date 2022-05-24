import React,{Component} from 'react'

class ConditionalRendering extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn:true
        }
    }
    render(){ 
        let message
        // if(this.state.isLoggedIn)  /**Type 1 */
        // return(<div><p>Hello Edwin</p></div>)
        // else
        // return(<div><p>Hello Guest</p></div>)
        // if(this.state.isLoggedIn) /**Type 2 */
        // message = <div><p>Hello Edwin</p></div>
        // else
        // message = <div><p>Hello Guest</p></div>

        // return(<div>{message}</div>)
        // return this.state.isLoggedIn ? <div><p>Hello Edwin</p></div> : <div><p>Hello Guest</p></div> Type 3 
        return this.state.isLoggedIn && <div><p>Hello Edwin</p></div>
    }
}

export default ConditionalRendering

/**
 * 1. Using if else , we cant write if else inside jsx so we need to enclose jsx inside if else
 * 2. Using element variable
 * 3. Using ternary operator
 * 4. Using short circuit operator &&
 */