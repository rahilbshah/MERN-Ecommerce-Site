import { Badge } from '@material-ui/core'
import {  Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="wrapper">
            <div className="left">
                <span className="language">
                    EN
                </span>
                <div className="searchcontainer">
                   <input type="text" contentEditable="true" />
                   <Search style={{color:"gray",fontSize:"16px",cursor:"pointer"}} />
                </div>
            </div>
            <div className="center">
                <h1>Shopify</h1>
            </div>
            <div className="right">
                <div className="menuItem">
                    REGISTER
                </div>
                <div className="menuItem">
                    SIGN IN
                </div>
                <div className="menuItem">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar