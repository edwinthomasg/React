import React,{useEffect} from "react";
import { connect } from "react-redux";
import fetchUsers from "../UserRedux/user/UserAction";
const UserComponent = ({userData,getUserList}) => {
    console.log("user daata : ",userData)
    useEffect(() => {
        getUserList()
    },[])
    return <p>hello</p>
}   
const mapStateProps = state => {
    console.log("state user: ",state.users)
    return{
        userData : state.users
    }
}
const mapDispatchProps = dispatch => {
    return{
        getUserList : () => {
            dispatch(fetchUsers())
        }
    }
}
export default connect(mapStateProps,mapDispatchProps)(UserComponent)