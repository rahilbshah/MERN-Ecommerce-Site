import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login",{username,password})
            dispatch(loginSuccess(res.data));
            navigate('/')
        } catch (error) {
            dispatch(loginFailure())
        }
    }
    console.log(error);
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form className='login-form'>
                    <input type="text" className="input" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
                    <input type="password" className="input" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                    <button className="button" onClick={handleLogin} disabled={isFetching} >LOGIN</button>
                    {error && <span style={{color:"red"}} >Something went Wrong...</span>}
                    <a href='/forget' className="link">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a href='/register' className="link">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}

export default Login