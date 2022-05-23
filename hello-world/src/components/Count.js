import React,{Component} from 'react'

class Increase extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        console.log("New")
        // this.setState({ /**Asynchronous */
        //     count:this.state.count + 1
        // },()=>{
        //     console.log("Callback : ",this.state.count)
        // })
        this.setState(prevState => ({count:prevState.count + 1}))
        console.log("synch : ",this.state.count) /**synchronous */
    }
    incrementTwo(){
        this.increment()
        this.increment()
    }
    render(){
        return(<div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.incrementTwo()}>Count</button>
        </div>)
    }
}

export default Increase