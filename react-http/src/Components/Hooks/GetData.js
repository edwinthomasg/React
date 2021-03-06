import axios from 'axios'
import React,{useState,useEffect} from 'react'

const GetData = () => 
{
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    return(<ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
    </ul>)
}

export default GetData