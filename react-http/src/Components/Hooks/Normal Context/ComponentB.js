import React from "react";
import { UserContext,ChannelContext } from "../../../App";
const ComponentB = () => {
    return(<UserContext.Consumer>
        {
            name1 => {
                return(<ChannelContext.Consumer>
                    {
                        name2 => <div>{name1} .... {name2}</div>
                    }
                </ChannelContext.Consumer>)
            }
        }
    </UserContext.Consumer>)
}

export default ComponentB