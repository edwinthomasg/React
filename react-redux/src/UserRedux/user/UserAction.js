import axios from "axios"
import { USER_LIST_REQ,REQ_SUCCESS,REQ_FAIL } from "./UserType"

const getUserListReq = () => {
    return{
        type : USER_LIST_REQ
    }
}
const getReqSuccess = (users) => {
    return{
        type : REQ_SUCCESS,
        payLoad : users
    }
}
const getReqFail = (error) => {
    return{
        type : REQ_FAIL,
        payLoad : error
    }
}
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(getUserListReq())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {       
            
            let users = response.data
            
            dispatch(getReqSuccess(users))
        })
        .catch(error => {
            let err = error.message
            dispatch(getReqFail(err))
           
        })
        
    } 
}

export default fetchUsers
