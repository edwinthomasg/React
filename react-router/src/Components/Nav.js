import React from "react"
import { Link,NavLink } from "react-router-dom"
const Nav = () => {
    const navStyles = ({isActive}) => {
        return{
            textDecoration : isActive ? "none" : "underline",
            color : isActive ? "red" : "black"
        }
    }
    return(<nav className="navStyle">
        <NavLink to='/' style={navStyles}>Home</NavLink>
        <NavLink to='/about' style={navStyles}>About</NavLink>
        <NavLink to='/contact' style={navStyles}>Contact</NavLink>
        <NavLink to='/products' style={navStyles}>Products</NavLink>
    </nav>)
}

export default Nav