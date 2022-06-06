import axios from "axios";
import React,{useState,useEffect} from "react";


const RegularUseState = () => {
    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState({})
    const [error,setError] = useState('')
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError(error)
            setPost({})
        })
    },[])

    return(<div>
        {loading ? 'loading' : post.title}
        {error ? error : null}
        </div>
  
    )
}

export default RegularUseState