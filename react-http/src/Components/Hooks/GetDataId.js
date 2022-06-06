import React,{useState,useEffect} from "react";
import axios from "axios";

const GetDataId = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)  
    const [idFromButton,setIdFromButton] = useState(1) 
    useEffect(()=>{
        console.log("useEffect")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response => {  
            console.log(response)
            setPost(response.data)
        })
        .catch(error => { 
            console.log(error)
        })
    },[idFromButton])
    let handleClick = () => {
        setIdFromButton(id)
    }
    return(<div>
        {console.log("Render")}
        <input type="text" value={id} onChange={(event) => {setId(event.target.value)}}></input>
        <button type="button" onClick={handleClick}>Fetch</button>
        <p>{post.title}</p>
    </div>)
}

export default GetDataId