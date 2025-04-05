import React from "react";
import { PRODUCTS } from "../data";

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;