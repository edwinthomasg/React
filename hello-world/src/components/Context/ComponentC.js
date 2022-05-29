import React,{Component} from "react";
import { UserConsumer } from "./Context";

class ComponentC extends Component{
    render(){
        return(<UserConsumer>
            {name => {
                return <div>{name}</div>
            }}
        </UserConsumer>)
    }
}
export default ComponentC