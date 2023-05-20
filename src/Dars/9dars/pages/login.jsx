import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [parol, setParol] = useState("")
    const [eye, setEye] = useState(true)

    const SignIn = () =>{
        if (login === "farqiyo" && parol === "12345") {
            navigate("/blog")
        } else{
            alert("parol yoki login xato")
        }
    }
    const handleEye = () =>{
        setEye(!eye)
    }

    return ( 
        <React.Fragment>
            <div className="home">
                <div className="form">
                    <input type="text" placeholder='Login' onChange={(e)=>setLogin(e.target.value)}/>
                    <input type={eye ? "password" : "text"} placeholder='Password' onChange={(e)=>setParol(e.target.value)}/>
                    <button onClick={SignIn}>Kirish</button>
                    <span onClick={handleEye}>{eye ? <>&#9786;</> : <>&#9787;</>}</span>
                    
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Login;