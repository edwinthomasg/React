import React from 'react'
import { useAuth } from './AuthContext'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    let logoutHandle = () => {
        auth.logout()
        navigate('/')
    }
    return(<div>
        welcome {auth.user}
        <button onClick={logoutHandle}>Logout</button>
    </div>)
}
export default Profile