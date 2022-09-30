import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form className='login-form'>
                    <input type="text" className="input" placeholder='Username' />
                    <input type="password" className="input" placeholder='Password' />
                    <button className="button">LOGIN</button>
                    <a href='/forget' className="link">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a href='/register' className="link">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}

export default Login