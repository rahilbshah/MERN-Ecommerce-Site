import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1>Shopify</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="social-container">
                    <div className="social-icon" style={{backgroundColor:"#3B5999"}} >
                        <Facebook/>
                    </div>
                    <div className="social-icon" style={{backgroundColor:"#E4405F"}} >
                        <Instagram/>
                    </div>
                    <div className="social-icon" style={{backgroundColor:"#55ACEE"}} >
                        <Twitter/>
                    </div>
                    <div className="social-icon" style={{backgroundColor:"#E60023"}} >
                        <Pinterest/>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className='title' >Useful Links</h3>
                <ul className='list' >
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Man Fashion</li>
                    <li className="listItem">Woman Fashion</li>
                    <li className="listItem">Accessories</li>
                    <li className="listItem">My Account</li>
                    <li className="listItem">Order Tracking</li>
                    <li className="listItem">Payment Details</li>
                    <li className="listItem">Wishlist</li>
                    <li className="listItem">Terms</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="title">Contact</h3>
                <div className="contactItem">
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="contactItem"><Phone style={{marginRight:"10px"}}/> +1 234 56 78</div>
                <div className="contactItem"><MailOutline style={{marginRight:"10px"}} /> contact@rahil.dev</div>
                <img className='payment' src="https://i.ibb.co/Qfvn4z6/payment.png" alt='' />
            </div>
        </div>
    )
}

export default Footer