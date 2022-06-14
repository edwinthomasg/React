import React,{useEffect} from "react";
import { connect } from "react-redux";
import fetchUsers from "../UserRedux/user/UserAction";
const UserComponent = ({userData,getUserList}) => {
    useEffect(() => {
        getUserList()
        
    },[])
    // console.log("userdata : ",userData)
    return userData.loading ? <h2>loading</h2> :
    userData.error ? <h2>Error</h2> :
    (
            <div>
                {
                    userData && userData.users && 
                    userData.users.map(user => <p key={user.id}>{user.name}</p>)
                }
            </div>
    )
    
       
}   
const mapStateProps = state => {
    console.log("state : " ,state);
    return{
        userData : state
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