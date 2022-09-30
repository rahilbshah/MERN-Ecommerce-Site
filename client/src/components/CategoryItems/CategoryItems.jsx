import React from 'react'
import './CategoryItems.css'
const CategoryItems = ({item}) => {
  return (
    <div className='categoryItem-container' key={item.id} >
        <img src={item.img} alt="" />
        <div className="info">
            <h1 className="title">{item.title}</h1>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItems