import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Products = () => {
    return(<div>
        Products Page
        <nav>
        <Link to='sale'>Sale</Link> 
        <Link to='buy'>Buy</Link>
        </nav>
        <Outlet />
    </div>)
} /**Outlet - to display child router components below a product page */
export default Products