import React from "react";
import CartItem from "./cartItem";
import ProgressBar from "./progressBar";

const Cart = ({ cart, subtotal, updateQuantity }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ProgressBar subtotal={subtotal} />
      <div className="cart-items">
        {cart.length > 0 ? cart.map(item => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        )) : <p>Your cart is empty</p>}
      </div>
      <h3>Subtotal: ₹{subtotal}</h3>
    </div>
  );
};

export default Cart;