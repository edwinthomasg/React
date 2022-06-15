import React from "react"
import { Link,NavLink } from "react-router-dom"
import { useAuth } from "./AuthContext"
const Nav = () => {
    const navStyles = ({isActive}) => {
        return{
            textDecoration : isActive ? "none" : "underline",
            color : isActive ? "red" : "black"
        }
    }
    const auth = useAuth()
    return(<nav className="navStyle">
        <NavLink to='/' style={navStyles}>Home</NavLink>
        <NavLink to='/about' style={navStyles}>About</NavLink>
        <NavLink to='/contact' style={navStyles}>Contact</NavLink>
        <NavLink to='/products' style={navStyles}>Products</NavLink>
        <NavLink to='/profile' style={navStyles}>Profile</NavLink>
        {
            !auth.user && (
                <NavLink to='/login' style={navStyles} >Login</NavLink>
            )
        }
    </nav>)
}

export default Nav