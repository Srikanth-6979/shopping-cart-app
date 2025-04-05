import { useState, useEffect } from "react";
import { FREE_GIFT, THRESHOLD } from "../data";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);

    if (total >= THRESHOLD) {
      if (!cart.some(item => item.id === FREE_GIFT.id)) {
        setCart(prevCart => [...prevCart, { ...FREE_GIFT, quantity: 1 }]);
      }
    } else {
      setCart(prevCart => prevCart.filter(item => item.id !== FREE_GIFT.id));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      return existingItem
        ? prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, change) => {
    setCart(prevCart =>
      prevCart
        .map(item => (item.id === productId ? { ...item, quantity: item.quantity + change } : item))
        .filter(item => item.quantity > 0)
    );
  };

  return { cart, subtotal, addToCart, updateQuantity };
};

export default useCart;
