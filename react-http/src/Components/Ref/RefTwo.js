import React,{Component} from 'react'

class RefClass extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState(prev => ({count : prev.count + 1}))
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(<div>
            Timer : {this.state.count}
        </div>)
    }
}

export default RefClass