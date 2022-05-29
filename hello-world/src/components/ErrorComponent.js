import React,{Component} from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'
class ErrorTest extends Component{
    render(){
        return(<div>
            <ErrorBoundary>
            <Hero name="Kamal"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero name="Rajini"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero name="Vadivelu"></Hero>
            </ErrorBoundary>
            
        </div>)
    }
}

export default ErrorTest