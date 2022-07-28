import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import AuthContext from '../context/AuthContext';

function ProtectedCosRoutes({ children }) {
  const { authToken } = useContext(AuthContext);

  if (!authToken) {
    Toastify({
      text: 'Login First',
      duration: 2000,

      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: '#ff435',
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    return <Navigate to='/login' />;
  } else {
    return children;
  }
}

export default ProtectedCosRoutes;
