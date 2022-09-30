import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import './Slider.css'
import { sliderItems } from '../../data'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className='slide-container'>
            <div className="arrow" style={{ left: "10px" }} onClick={() => handleClick("left")} >
                <ArrowLeftOutlined />
            </div>
            <div className="wrapper" style={{ transform: `translate(${slideIndex * -100}vw)` }} >
                {sliderItems.map((item) => {
                    return (<div className="slide" key={item.id} style={{ backgroundColor: `#${item.bg}` }} >
                        <div className="imgcontainer">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="infocontainer">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button>SHOW NOW</button>
                        </div>
                    </div>)
                })}
            </div>
            <div className="arrow" style={{ right: "10px" }} onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider