import React,{Component} from 'react'
class Sample extends Component{
    render(props){
        const {name} = this.props
        return(<div>
            <h1>Hello {name}</h1>
        </div>)
    }
}

export default Sample

/**Similarly for state  */