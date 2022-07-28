import React, { useEffect, useState } from 'react';
import { Footer } from '../components';
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { useNavigate } from 'react-router-dom';
import '../styles/extra.css';

function Signup() {
  const [signupData, setSignupData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
    re_password: '',
  });
  const navigate = useNavigate();
  // console.log(signupData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData);
    if (signupData.password !== signupData.re_password) {
      return Toastify({
        text: 'Password does not match',
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
      }).showToast();
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    };
    let res = await fetch(
      'https://fichuastore.herokuapp.com/api/auth/users/',
      options
    );
    let data = await res.json();
    console.log(data);
    console.log(res);
    if (res.status === 201) {
      Toastify({
        text: 'You need to activate your account for you to login',
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'green',
        },
      }).showToast();
      navigate('/activation');
    } else {
      Toastify({
        text: `${
          (data && data.email) || (data && data.name) || (data && data.contact)
        }`,
        duration: 4000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
      }).showToast();
    }
  };
  return (
    <>
      <div className='container loginContainer'>
        <main className='form-signin text-center'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1 className='text-primary px-5 py-3 text-center txt-xl'>
              Register
            </h1>

            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='username'
                name='name'
                required
                value={signupData.name}
                onChange={(e) =>
                  setSignupData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <label htmlFor='floatingInput'>Username</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
                name='email'
                required
                value={signupData.email}
                onChange={(e) =>
                  setSignupData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='text'
                className='form-control'
                id='floatingInput'
                placeholder='Contact'
                name='contact'
                required
                value={signupData.contact}
                onChange={(e) =>
                  setSignupData((prev) => ({
                    ...prev,
                    contact: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatingInput'>Contact</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
                name='password'
                required
                value={signupData.password}
                onChange={(e) =>
                  setSignupData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <br></br>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
                name='re_password'
                required
                value={signupData.re_password}
                onChange={(e) =>
                  setSignupData((prev) => ({
                    ...prev,
                    re_password: e.target.value,
                  }))
                }
              />
              <label htmlFor='floatingPassword'>Confirm Password</label>
            </div>
            <br></br>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Sign Up
            </button>

            <div className='mt-4'>
              <p>
                Have an Account?{' '}
                <Link to={'/login'}>
                  <span
                    style={{
                      color: '#34b3e5',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
