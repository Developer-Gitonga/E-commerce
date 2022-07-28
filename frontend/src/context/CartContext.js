import { createContext, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  let contextData = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};
