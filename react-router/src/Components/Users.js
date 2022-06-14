import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const show = searchParams.get('filter')
    return(<div>
        <h3>User1</h3>
        <h3>User2</h3>
        <h3>User3</h3>
        <Outlet />
        <button onClick={() => setSearchParams({filter:'active'})}>Active USERS</button>
        <button onClick={() => setSearchParams({})}>Reset USERS</button>
        {
            show ? <h1>Active</h1> : <h1>All</h1>
        }
    </div>)
}
export default Users