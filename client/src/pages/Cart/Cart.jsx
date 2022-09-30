import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'
import './Cart.css'
const Cart = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="carp-wrapper">
                <h1 className="title">YOUR BAG</h1>
                <div className="top">
                    <button className="topButton" style={{backgroundColor:"transparent"}} >CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText">Shopping Bag (2)</span>
                        <span className="topText">Your Wishlist (0)</span>
                    </div>
                    <button className="topButton" style={{border:'none',backgroundColor:"black",color:"white"}} >CHECKOUT NOW</button>
                </div>
                <div className="bottom">
                    <div className="cart-info">
                        <div className="cart-product">
                            <div className="cart-productDetails">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="details">
                                    <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                                    <span><b>ID:</b> 93813718293</span>
                                    <div className="productcolor" style={{backgroundColor:"black"}} />
                                    <span><b>Size:</b> 37.5</span>
                                </div>
                            </div>
                            <div className="priceDetails">
                                <div className="productAmountContainer">
                                    <Add/>
                                    <div className="productAmount">2</div>
                                    <Remove/>
                                </div>
                                <div className="productPrice">$ 30</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="cart-product">
                            <div className="cart-productDetails">
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                <div className="details">
                                    <span><b>Product:</b>HAKURA T-SHIRT</span>
                                    <span><b>ID:</b> 93813718293</span>
                                    <div className="productcolor" style={{backgroundColor:"black"}} />
                                    <span><b>Size:</b> M</span>
                                </div>
                            </div>
                            <div className="priceDetails">
                                <div className="productAmountContainer">
                                    <Add/>
                                    <div className="productAmount">1</div>
                                    <Remove/>
                                </div>
                                <div className="productPrice">$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <div className="summaryItem">
                            <span>Subtotal</span>
                            <span>$ 80</span>
                        </div>
                        <div className="summaryItem">
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="summaryItem">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="summaryItem" style={{fontWeight:"500",fontSize:"24px"}} >
                            <span>Total</span>
                            <span>$ 80</span>
                        </div>
                        <button className="summaryButton">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart