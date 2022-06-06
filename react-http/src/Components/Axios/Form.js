import axios from 'axios'
import React,{Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            uName : "",
            uId : ""
        }
    }
    onChangeHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    }
    render(){
        return(<div>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="uName" value={this.state.uName} onChange={this.onChangeHandler}></input>
                <input type="text" name="uId" value={this.state.uId} onChange={this.onChangeHandler}></input>
                <button type="submit">Submit</button>
            </form>
        </div>)
    }
}
export default Form