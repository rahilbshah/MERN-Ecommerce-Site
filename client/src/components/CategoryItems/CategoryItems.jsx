import React from 'react'
import './CategoryItems.css'
import { Link } from 'react-router-dom'
const CategoryItems = ({ item }) => {
  return (
    <div className='categoryItem-container' key={item.id} >
      <Link to={`/products/${item.cat}`} >
        <img src={item.img} alt="" />
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItems