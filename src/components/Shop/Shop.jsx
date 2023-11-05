import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    // console.log(products) // প্রথম এ  product টা পাবো না, নিচে যখন products পাঠাবো তখন পাবো
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart)
    // step-1: get id
    for(const id in storedCart){
      // step-2: get product from products state by using id
      const addedProduct = products.find(product => product.id === id)
      // console.log(saveproduct)
      if(addedProduct){
        // step-3: add quantity
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        // step-4: add the addedProducts to saved cart
        savedCart.push(addedProduct);
      }
    }
    // step-5: set the cart
    setCart(savedCart);
  },[products])

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container" style={{ backgroundColor: "#ffe1b3" }}>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
