import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import './ProductPage.css'
import { useDispatch } from 'react-redux'

const ProductPage = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/product/find/' + productId);
        setProduct(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [productId])
  // console.log({ color, size, quantity });

  const handleClick = () => {
    dispatch(
      addProduct({...product,quantity,size,color})
    )
  }

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="imgcontainer">
          <img alt="" src={product.img} />
        </div>
        <div className="infocontainer">
          <h1>{product.title}</h1>
          <p>
            {product.desc}
          </p>
          <span className="price">₹ {product.price}</span>
          <div className="filtercontainer">
            <div className="filter">
              <div className="filtertitle">Color</div>
              {
                product.color?.map(c => (
                  <div className="filtercolor" onClick={() => setColor(c)} key={c} style={{ backgroundColor: `${c}` }} />
                ))
              }
            </div>
            <div className="filter">
              <div className="filtertitle">Size</div>
              <select onChange={(e) => setSize(e.target.value)} >
                {
                  product.size?.map(s => (
                    <option key={s}>{s}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="addcontainer">
            <div className="amountcontainer">
              <Remove className="productPage-icon" onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)} />
              <span>{quantity}</span>
              <Add className="productPage-icon" onClick={() => setQuantity((prev) => prev + 1)} />
            </div>
            <button onClick={handleClick} >ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;