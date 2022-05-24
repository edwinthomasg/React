import React,{Component} from 'react'

class Event extends Component{
    buttonClick1(){
        console.log("Button Clicked 1")
    }
    buttonClick2(){
        console.log("Button Clicked 2")
    }
    render(){
        return(
            <div>
                <p>Click below button</p>
                <button onClick={this.buttonClick1}>click 1</button><br></br><br></br>
                <button onClick={() => this.buttonClick2()}>click 2</button>
            </div>
        )
    }
}

export default Event