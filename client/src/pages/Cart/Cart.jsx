import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'
import './Cart.css'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE
const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    }

    console.log(stripeToken);
    useEffect(()=>{
        const makeRequest = async ()=>{
            try {
                const res = await axios.post(`http://localhost:8800/api/checkout/payment`,{
                    tokenId:stripeToken.id,
                    amount:cart.total
                })
                console.log(res.data);
                navigate('/success',{state:{ stripeData: res.data,products: cart}})

            } catch (error) {
                console.log(error);
            }
        }
       stripeToken && makeRequest();
    },[stripeToken,cart,navigate])
    console.log(cart.total);
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="carp-wrapper">
                <h1 className="title">YOUR BAG</h1>
                <div className="top">
                    <button className="topButton" style={{ backgroundColor: "transparent" }} >CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText">Shopping Bag (2)</span>
                        <span className="topText">Your Wishlist (0)</span>
                    </div>
                    <button className="topButton" style={{ border: 'none', backgroundColor: "black", color: "white" }} >CHECKOUT NOW</button>
                </div>
                <div className="bottom">
                    <div className="cart-info">
                        {cart.products.map((product => (
                            <div key={product._id}  >
                                <div className="cart-product" >
                                    <div className="cart-productDetails">
                                        <img src={product.img} alt="" />
                                        <div className="details">
                                            <span><b>Product:</b>{product.title}</span>
                                            <span><b>ID:</b>{product._id}</span>
                                            <div className="productcolor" style={{ backgroundColor: `${product.color}` }} />
                                            <span><b>Size:</b>{product.size}</span>
                                        </div>
                                    </div>
                                    <div className="priceDetails">
                                        <div className="productAmountContainer">
                                            <Add />
                                            <div className="productAmount">{product.quantity}</div>
                                            <Remove />
                                        </div>
                                        <div className="productPrice">$ {product.price * product.quantity}</div>
                                    </div>
                                </div>
                                <hr />
                            </div>)
                        ))
                        }
                    </div>
                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <div className="summaryItem">
                            <span>Subtotal</span>
                            <span>₹ {cart.total}</span>
                        </div>
                        <div className="summaryItem">
                            <span>Estimated Shipping</span>
                            <span>₹ 5.90</span>
                        </div>
                        <div className="summaryItem">
                            <span>Shipping Discount</span>
                            <span>₹ -5.90</span>
                        </div>
                        <div className="summaryItem" style={{ fontWeight: "500", fontSize: "24px" }} >
                            <span>Total</span>
                            <span>₹ {cart.total}</span>
                        </div>
                        <StripeCheckout
                            name='Rahil'
                            billingAddress
                            shippingAddress
                            description={`your total is ${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className="summaryButton">CHECKOUT NOW</button>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart