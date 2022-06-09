import React from 'react'
import buyCookies from './Action'
import { connect } from 'react-redux'
const Cookies = (props) => {
    return(
        <div>
        <p>No of cookies : {props.noOfCookies} </p>
        <button onClick={props.buyCookie  }>Buy Cookies</button>
    </div>
    )
}
const mapStateToProps = (state) => { /**gets redux state as param */
    return{
        noOfCookies : state.noOfCookies
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCookie  : () => dispatch(buyCookies( ))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)
(Cookies) 