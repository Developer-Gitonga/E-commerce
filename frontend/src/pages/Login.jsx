import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Toastify from 'toastify-js';
import jwt_decode from 'jwt-decode';
import { Footer } from '../components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken, setUser, setFullUserInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ email: email, password: password }),
    };
    let res = await fetch(
      'https://fichuastore.herokuapp.com/api/auth/jwt/create/',
      options
    );
    let data = await res.json();

    if (res.status === 200) {
      Toastify({
        text: 'Login successfull',
        duration: 5000,

        close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'green',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      setAuthToken(data);
      let user_decoded = jwt_decode(data.access);
      setUser(user_decoded);
      localStorage.setItem('authToken', JSON.stringify(data));
      localStorage.setItem('user', JSON.stringify(jwt_decode(data.access)));
      navigate('/');
      let user_full_info = await fetch(
        `https://fichuastore.herokuapp.com/api/user/${user_decoded.user_id}/`
      );
      let full_user_data = await user_full_info.json();
      setFullUserInfo(full_user_data);
      localStorage.setItem('full_user_data', JSON.stringify(full_user_data));
      console.log('Now we have the full user data');
    } else {
      Toastify({
        text: data.detail,
        duration: 3000,

        close: true,
        gravity: 'bottom', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: 'red',
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container className='justify-content-center p-5 w-50'>
        <h1 className='text-primary px-5 py-3 text-center txt-xl'>Log in</h1>
        <Form
          onSubmit={handleSubmit}
          className='px-5 flex flex-column align-items-center'
        >
          <FloatingLabel
            controlId='floatingInputEmailGrid'
            label='Email'
            className='mb-3'
          >
            <Form.Control
              className='border-secondary'
              id='floatingEmailInput'
              type='email'
              placeholder='name@example.com'
              value={email}
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingInputGrid'
            label='Password'
            className='mb-3'
          >
            <Form.Control
              className=' border-secondary'
              type='password'
              id='floatingPassword'
              placeholder='Password'
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <Navbar sticky='bottom' className='justify-content-between'>
            <Nav.Item className=''>
              <LinkContainer className='' to='/signup'>
                <Button
                  variant='outline-secondary'
                  className='txt-b text-primary bg-light'
                >
                  No account? Register
                </Button>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item className=''>
              <Button className='txt-b text-white' type='submit'>
                Log In
                <MdOutlineArrowForward className=' ms-2' />
              </Button>
            </Nav.Item>
          </Navbar>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
