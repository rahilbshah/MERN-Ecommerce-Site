import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className='navbar-container'>
            <div className="wrapper">
                <div className="left">
                    <span className="language">
                        EN
                    </span>
                    <div className="searchcontainer">
                        <input type="text" contentEditable="true" />
                        <Search style={{ color: "gray", fontSize: "16px", cursor: "pointer" }} />
                    </div>
                </div>
                <div className="center">
                    <Link to="/" style={{ textDecoration: "none" }}><h1>Shopify</h1></Link>
                </div>
                <div className="right">
                    <Link style={{ textDecoration: "none" }} to='/register' >
                        <div className="menuItem">
                            REGISTER
                        </div>
                    </Link >
                    <Link style={{ textDecoration: "none" }} to='/login'>
                        <div className="menuItem">
                            SIGN IN
                        </div>
                    </Link>
                    <div className="menuItem">
                        <Link to={'/cart'} >
                        <Badge badgeContent={quantity} color="primary" overlap='rectangular' >
                            <ShoppingCartOutlined />
                        </Badge>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar