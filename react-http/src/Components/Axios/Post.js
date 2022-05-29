import React,{Component} from 'react'

class Post extends Component{
    render(){
        return(<>
        <p>{this.props.title}</p>
        </>)
    }
}

export default Post