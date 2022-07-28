import { createContext, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const PaypalContext = createContext();

export default PaypalContext;

export const PaypalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);
  let contextData = {
    data,
    setData,
  };

  return (
    <PaypalContext.Provider value={contextData}>
      {children}
    </PaypalContext.Provider>
  );
};
