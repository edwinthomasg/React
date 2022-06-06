
import React,{useState,useEffect} from 'react'

const HooksForm = () => {
    const [name,setName] = useState({firstName:'',lastName:''})
    useEffect(() => {
        console.log("Use Effect Executed .. ")
        document.title = "Firstname Updated"
    },[name.firstName])
    return(<React.Fragment>
        <form>
            <input type="text" value={name.firstName} onChange={(event)=>setName({...name,firstName:event.target.value})}></input>
            <input type="text" value={name.lastName} onChange={(event)=>setName({...name,lastName:event.target.value})}></input>
        </form>
        <p>your firstName {name.firstName} your lastName {name.lastName}</p>
    </React.Fragment>)
}
export default HooksForm

