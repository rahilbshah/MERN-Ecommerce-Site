import { Send } from '@material-ui/icons'
import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div>
        <div className="newsletter-container">
            <h1>Newsletter</h1>
            <div className="desc">Get timely updates from your favorite products.</div>
            <div className="input-container">
                <input type="text" placeholder='Enter Your Email' contentEditable="true" />
                <button> <Send/> </button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter