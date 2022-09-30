import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import './ProductPage.css'
const ProductPage = () => {
    return (
        <div className='product-container'>
            <Navbar />
            <Announcement />
            <div className="wrapper">
                <div className="imgcontainer">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </div>
                <div className="infocontainer">
                    <h1 className="title">Denim Jumpsuit</h1>
                    <p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <span className="price">$ 20</span>
                    <div className='filtercontainer'>
                        <div className='filter'>  
                                <span className='filtertitle'>
                                    Color :
                                </span>
                                <div className='filtercolor' style={{backgroundColor:"red"}} ></div>
                                <div className='filtercolor' style={{backgroundColor:"black"}} ></div>
                                <div className='filtercolor' style={{backgroundColor:"blue"}} ></div>
                            <select>
                                <option disabled selected>
                                    Size
                                </option>
                                <option className='filtersize' >XS</option>
                                <option className='filtersize' >S</option>
                                <option className='filtersize' >M</option>
                                <option className='filtersize' >L</option>
                                <option className='filtersize' >XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="addcontainer">
                        <div className="amountcontainer">
                            <Remove/>
                            <span>1</span>
                            <Add/>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default ProductPage