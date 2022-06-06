import React,{useContext} from "react";
import { UserContext,ChannelContext } from "../../../App";
const ComponentY = () => {
    const name1 = useContext(UserContext)
    const name2 = useContext(ChannelContext)
   return(<div>{name1} ... {name2}</div>)
}

export default ComponentY 