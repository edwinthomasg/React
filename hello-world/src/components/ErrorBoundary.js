import React,{Component} from 'react'

class ErrorBoundary extends Component{

    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError(error){
        console.log("Error Occur")
        return {
            hasError : true
        }
    }
    componentDidCatch(error,info){
        console.log("Error info to console")
        console.log(error.message,info)
    }
    render(){
        console.log("Render")
        if(this.state.hasError){
            return <h1>Something went wrong ...</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary