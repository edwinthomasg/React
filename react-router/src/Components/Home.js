import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate()
    return(<div>
        Home Page<br></br>
        <button onClick={() => navigate('order-summary',{replace:true})}>Order</button>
    </div>)
}