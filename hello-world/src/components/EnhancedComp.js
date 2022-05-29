import React from "react";

const EnhancedCompo = OriginalComp => {
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state = {
                count : 0
            }
        }
        incrementCounter = ()=>{
            this.setState(prevState => {
                return{
                    count : prevState.count + 1
                }
            })
        }
        render(){
        console.log(this.props.name)
            return(<OriginalComp handler={this.incrementCounter} count={this.state.count} {...this.props}></OriginalComp>
)
        }
    }
    return NewComponent
}
export default EnhancedCompo