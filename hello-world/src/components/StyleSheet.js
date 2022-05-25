import React from 'react'
import './MyStyle.css'
function StyleSheet(props){
    let className = props.className? 'heading' : ''
    return(<div>
        <h1 className={`${className} colorChange`}>Welcome To React Application</h1>
    </div>)
}
export default StyleSheet