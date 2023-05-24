import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    })
    const navigate = useNavigate()

    const handleClick = async (e)=>{
        e.preventDefault();
        if(user.password === user.confirmpassword){
            try {
                
                const {confirmpassword,...data} = user
                const res = await axios.post("http://localhost:8800/api/auth/register",data);
                console.log(res.data);
                navigate("/login")
            } catch (error) {
             console.log(error);   
            }
        }
    }

    const handleChange = (e)=>{
        setUser((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1 className='title'>CREATE AN ACCOUNT</h1>
                <form className='register-form'>
                    <input type="text" className="input" onChange={handleChange} name='username' placeholder='Username' />
                    <input type="email" className="input" onChange={handleChange} name='email' placeholder='Email' />
                    <input type="password" className="input" onChange={handleChange} name='password' placeholder='Password' />
                    <input type="password" className="input" onChange={handleChange} name='confirmpassword' placeholder='Confirm Password' />
                    <span className="agreement"> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button className="button" onClick={handleClick} >CREATE USER</button>
                </form>
            </div>
        </div>
    )
}

export default Register