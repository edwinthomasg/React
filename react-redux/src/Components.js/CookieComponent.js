import React from 'react'
import buyCookies from '../Redux/Cookies/CookieAction'
import { connect } from 'react-redux'
const CookieComponent = (props) => {
    return(<div>
        <p>No of Cookies : {props.noOfCookies}</p>
        <button onClick={props.buyCookie}>Buy Cookie</button>
    </div>)
}
const mapStateToProps = (state) =>{
    return{
            noOfCookies : state.noOfCookies
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       buyCookie : () => dispatch(buyCookies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CookieComponent)