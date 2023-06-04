import './Navbar.css'
import { useNavigate,Link } from "react-router-dom"
export default function Navbar(){
    let navigate = useNavigate()
    if(localStorage.getItem('token')){
        return (
            <div  style={{display:"flex",gap:"20px"}}>
                <img src={`http://localhost:8000/uploads/${localStorage.getItem('photo')}`} alt="Profile Photo" />
                <p>{localStorage.getItem('name')}</p>
                <Link to ="/">Home</Link>
                <Link to ="/recipe">recipe</Link>
                <Link to ="/Ajout">Ajouter</Link>
                <button onClick={()=>{navigate("/login");localStorage.removeItem("token")}}>logout</button>
            </div>
        )
    }
    return (
        <div style={{display:"flex",gap:"20px"}}>
                <Link to ="/">Home</Link>
                <Link to ="/login">login</Link>
                <Link to ="/signup">signup</Link>
                <Link to ="/recipe">recipe</Link>
        </div>
    )
}