import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import './ProductList.css'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="title">Dresses</h1>
      <div className='filtercontainer'>
        <div className='filter'>
          <span className='filtertext'>Filter Products:</span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className='filter'>
          <span className='filtertext'>Sort Products:</span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList