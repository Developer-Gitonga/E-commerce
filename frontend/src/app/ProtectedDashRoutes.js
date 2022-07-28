import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import AuthContext from '../context/AuthContext';

function ProtectedDashRoutes({ children }) {
  const { authToken, fullUserInfo } = useContext(AuthContext);

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
    if (!fullUserInfo) return <Navigate to='/becomeVendor' />;
    const { is_vendor } = fullUserInfo;
    if (!is_vendor) {
      Toastify({
        text: 'You need to be a vendor to access the dashboard',
        duration: 5000,

        close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      return <Navigate to='/becomeVendor' />;
    }
    return children;
  }
}

export default ProtectedDashRoutes;
