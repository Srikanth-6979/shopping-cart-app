import React from "react";

const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</span>
      {item.id !== 99 && (
        <>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
        </>
      )}
      {item.id === 99 && <span className="free-gift">FREE GIFT</span>}
    </div>
  );
};

export default CartItem;