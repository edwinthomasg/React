import axios from "axios";
import React,{useReducer,useEffect} from "react";

let initialState = {
    loading : true,
    error : '',
    post : {}
}
let reducer = (state,action) => {
    switch(action.type){
        case 'success' : return {
          loading : false,
          error : '',
          post : action.data
        }
        case 'fail' : return {
            loading : false,
            error : 'something went wrong',
            post : {}
          }
    }
}
const WithReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.tyicode.com/posts/1")
        .then(response => {
            dispatch({type:"success",data:response.data})
        })
        .catch(error => {
            dispatch({type:"fail"})
        })
    },[])
    return(<div>
        {
            state.loading ? 'loading' : state.post.title
        }
        {
            state.error ? state.error : null
        }
        
    </div>)
}
export default WithReducer