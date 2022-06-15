import React,{useState} from "react";
import { useAuth } from "./AuthContext";
import {useNavigate,useLocation} from "react-router-dom"
const Login = () => {
    const[user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.state?.path || '/'
    const loginHandler = () => {
        auth.login(user)
        navigate(redirect,{replace:true})
    }
    return(<div>
        <input type="text" value={user} onChange={(event) => setUser(event.target.value)}></input>
        <button onClick={loginHandler}>Login</button>
    </div>)
}

export default Login