import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import './ProductList.css'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
const ProductList = () => {
  const location = useLocation();
 const cat = location.pathname.split("/")[2];
 const [filter, setFilter] = useState({});
 const [sort, setSort] = useState("newest");

 const handleFilter = (e)=>{
  setFilter({...filter,[e.target.name]:e.target.value})
 }
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="productList-title">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h1>
      <div className='filtercontainer'>
        <div className='filter'>
          <span className='filtertext'>Filter Products:</span>
          <select name='color' onChange={handleFilter} >
            <option disabled>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select name='size' onChange={handleFilter}>
            <option disabled>
              Size
            </option>
            <option>XXL</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className='filter'>
          <span className='filtertext'>Sort Products:</span>
          <select onChange={(e)=>setSort(e.target.value)} >
            <option value="newest" >Newest</option>
            <option value="asc" >Price (asc)</option>
            <option value="desc" >Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList