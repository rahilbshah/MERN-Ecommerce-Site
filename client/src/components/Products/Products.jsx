import React, { useState } from "react";
import "./Products.css";
// import {popularProducts} from '../../data'
import Product from "../Product/Product";
import { useEffect } from "react";
import axios from "axios";

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:8800/api/product?category=${cat}`
          : `http://localhost:8800/api/product`
      );
      setProducts(res.data);
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filter, cat, products]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) =>[...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="products-container">
      {cat
        ? filteredProduct.map((item) => <Product item={item} key={item._id} />)
        : products.slice(0,8).map((item) => <Product item={item} key={item._id} />)}
    </div>
  );
};

export default Products;
