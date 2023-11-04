import React from "react";
import './Cart.css';

const Cart = ({cart}) => { // option-3 
    // console.log(props.cart); // option-1
    // const cart = props.cart;
    // const {cart} = props; // option-2
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
      totalPrice = totalPrice + product.price;
      totalShipping = totalShipping + product.shipping;
    }
    // ধরে নিলাম ৭% টেক্স
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="order-info">
      <h2>Order Summary</h2>
      <div className="cart-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
      </div>
    </div>
  );
};

export default Cart;
