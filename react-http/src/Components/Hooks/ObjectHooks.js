import React,{useState} from "react";

const ObjectHooks = () => {
    const [name,setName] = useState({firstName : '',lastName : ''})
    return(<React.Fragment>
        <form>
            <input type="text" value={name.firstName} onChange={(event) => setName({...name,firstName : event.target.value })} />
            <input type="text" value={name.lastName} onChange={(event) => setName({...name,lastName: event.target.value})} />
        </form>
        <p>First Name : {name.firstName} , Last Name : {name.lastName}</p>
    </React.Fragment>)
}

export default ObjectHooks

/**Why we used spread operator here is when compared to setState , useState wont merge
 * state automatically . So we are telling that take all properties from name object and modify which it is required.
 */