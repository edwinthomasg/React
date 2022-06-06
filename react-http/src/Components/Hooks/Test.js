import React,{Component} from 'react'

class Test extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        console.log("Did mount ...")
        document.title = `clicked ${this.state.count} times`
    }
    componentDidUpdate(nextProps,nextState){
        console.log(nextState)
        document.title = `clicked ${this.state.count} times`
    }
    render(){
        console.log("Render ")
        return(<React.Fragment>
            <p>You clicked {this.state.count} times.</p>
            <button onClick={()=> {
        this.setState({
            count : this.state.count + 1
        })
    }}>click</button>
        </React.Fragment>)
    }
}
export default Test