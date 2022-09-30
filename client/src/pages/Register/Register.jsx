import React from 'react'
import './Register.css'
const Register = () => {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1 className='title'>CREATE AN ACCOUNT</h1>
                <form className='register-form'>
                    <input type="text" className="input" placeholder='Name' />
                    <input type="text" className="input" placeholder='Last Name' />
                    <input type="text" className="input" placeholder='Username' />
                    <input type="email" className="input" placeholder='Email' />
                    <input type="password" className="input" placeholder='Password' />
                    <input type="password" className="input" placeholder='Confirm Password' />
                    <span className="agreement"> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button className="button">CREATE USER</button>
                </form>
            </div>
        </div>
    )
}

export default Register