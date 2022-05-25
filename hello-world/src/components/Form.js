import React, { Component } from 'react'

class FormComponent extends Component{
    constructor(){
        super()
        this.state = {
            username : '',
            comment : '',
            stack : 'MERN'
        }
    }
    changeName = (event)=>{
        this.setState({
            username : event.target.value
        })
    }
    changeComment = (event)=>{
        this.setState({
            comment : event.target.value
        })
    }
    changeStack = (event)=>{
        this.setState({
            stack : event.target.value
        })
    }
    submit = ()=>{
        alert(`You entered name = ${this.state.username} , comment = ${this.state.comment} and stack = ${this.state.stack}`)
    }
   render(){
    return(<form onSubmit={this.submit}>
        <div>
            <label>Name</label>
            <input type="text" value={this.state.username} onChange={this.changeName}></input>
        </div><br></br>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.changeComment}></textarea>
        </div><br></br>
        <div>
            <label>Stack</label>
            <select value={this.state.stack} onChange={this.changeStack}>
                <option value="mern">MERN</option>
                <option value="mean">MEAN</option>
                <option value="perl">PERL</option>
            </select>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
        )
   }
}

export default FormComponent