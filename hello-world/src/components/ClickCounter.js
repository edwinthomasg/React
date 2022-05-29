import React from 'react'
import EnhancedCompo from './EnhancedComp'

class ClickCounter extends React.Component{
    render(){
        const {count,handler} = this.props
        return(<div>
            <p>Clicked times : {count}</p>
            <button onClick = {handler}>Click</button>
            <p>Hello {this.props.name}</p>
        </div>)
    }
}

export default EnhancedCompo(ClickCounter)