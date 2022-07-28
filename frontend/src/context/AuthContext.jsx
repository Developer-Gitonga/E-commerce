import { createContext, useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  let [user, setUser] = useState(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : 'No user found'
  );
  let [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken')
      ? JSON.parse(localStorage.getItem('authToken'))
      : null
  );

  let [fullUserInfo, setFullUserInfo] = useState(
    localStorage.getItem('full_user_data')
      ? JSON.parse(localStorage.getItem('full_user_data'))
      : null
  );

  const logout = () => {
    Toastify({
      text: `${fullUserInfo.name}, logout was successfull`,
      duration: 4000,

      close: true,
      gravity: 'bottom', // `top` or `bottom`
      position: 'center', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'green',
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('full_user_data');
    navigate('/login');
  };

  let contextData = {
    user: user,
    authToken: authToken,
    fullUserInfo: fullUserInfo,
    setFullUserInfo: setFullUserInfo,
    setAuthToken: setAuthToken,
    setUser: setUser,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
