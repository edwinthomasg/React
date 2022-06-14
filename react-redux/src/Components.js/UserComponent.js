import React,{useEffect} from "react";
import { connect } from "react-redux";
import fetchUsers from "../UserRedux/user/UserAction";
const UserComponent = ({userData,getUserList}) => {
    console.log("user daata : ",userData)
    useEffect(() => {
        getUserList()
    },[])
    return userData.loading ? (<h2>Loading</h2>) :
    userData.error ? (<h2>{userData.error}</h2>)
    : (<div>
        {
            userData && 
            userData.users
            &&
            userData.users.map(user => user.name)
        }
    </div>)
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