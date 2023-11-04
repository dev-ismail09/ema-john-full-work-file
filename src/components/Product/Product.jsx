import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
//   console.log(props.product);
  const { img, name, price, quantity, ratings, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product-style">
      <img src={img} alt="not found" />
      <div className="product-info">
        <h6>{name}</h6>
        <h6>Price: ${price}</h6>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="product-button"
      >
        Add To Cart
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
