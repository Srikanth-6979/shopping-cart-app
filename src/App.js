import React from "react";
import ProductList from "./components/productList";  
import Cart from "./components/cart";    
import useCart from "./hooks/useCart";

const App = () => {
  const { cart, subtotal, addToCart, updateQuantity } = useCart();

  return (
    <div className="app">
      <h1>Shopping Cart App</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} subtotal={subtotal} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;