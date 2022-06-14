import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navigate = () => {
    const navigate = useNavigate()
    return(<div>
        Order Confirmed<br></br>
        <button onClick={() => navigate(-1)}>Go BACK</button>
    </div>)
}

export default Navigate