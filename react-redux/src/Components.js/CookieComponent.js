import React,{useState} from 'react'
import buyCookies from '../Redux/Cookies/CookieAction'
import { connect } from 'react-redux'
const CookieComponent = (props) => {
    const[number,setNumber] = useState(1)
    return(<div>
        
        <p>No of Cookies : {props.noOfCookies}</p>
        <input type="text" value={number} onChange={event => setNumber(event.target.value)} ></input><br></br>
        <button onClick={() => props.buyCookie(number)}>Buy {number} Cookie</button>
    </div>)
}
const mapStateToProps = (state,ownProps) =>{
    const check = ownProps.allow ? state.noOfCookies : 1
    return{
            noOfCookies : check
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
       buyCookie : number => dispatch(buyCookies(number)) /**we can have action payload too */
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CookieComponent)