import axios from "axios"
import { USER_LIST_REQ,REQ_SUCCESS,REQ_FAIL } from "./UserType"

const getUserListReq = () => {
    return{
        type : USER_LIST_REQ
    }
}
const getReqSuccess = (users) => {
    console.log("from action : ",users)
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
        console.log("start")
        dispatch(getUserListReq())
        console.log("middle")
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {       
            console.log("response : ",response.data)
            let users = response.data
            console.log("users : ",users)
            dispatch(getReqSuccess(users))
        })
        .catch(error => {
            let err = error.message
            dispatch(getReqFail(err))
            console.log("end")
        })
        
    } 
}

export default fetchUsers
