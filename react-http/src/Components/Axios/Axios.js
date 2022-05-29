import React,{Component} from 'react'
import axios from 'axios'
import Post from './Post'
class Axios extends Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                posts : response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {posts} = this.state
        return(<div>
            List of posts : 
            {
                posts.length ?
                posts.map(post => <Post key={post.id} title={post.title}></Post>)
                : null 
            }
        </div>)
    }
}

export default Axios