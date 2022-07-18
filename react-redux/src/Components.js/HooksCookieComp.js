import React from "react";
import { useSelector,useDispatch } from "react-redux";
import buyCookies from "../Redux/Cookies/CookieAction";

const HooksCookieComp = () => {

    const noOfCookies = useSelector(state => state.noOfCookies)
    console.log(noOfCookies)
    const dispatch = useDispatch()
    return(<div>
        <p>No of Cookies = {noOfCookies}</p>
        <button onClick={() => dispatch(buyCookies())}>Buy Cookie</button>
    </div>)
}
export default HooksCookieComp