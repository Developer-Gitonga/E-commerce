import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Toastify from 'toastify-js';
import { Footer, Spinner } from '../components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import useFetch from '../services/useFetch';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  // const [profileData, setProfileData] = useState({
  // 	uname: '',
  // 	contact: '',
  // 	email: '',
  // 	city: '',
  // 	address: '',
  // 	location: '',
  // });

  const { data, loading, error } = useFetch(
    `https://fichuastore.herokuapp.com/api/profile/${user.user_id}/`
  );

  const [name, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        city: city,
        location: location,
        address: address,
      }),
    };

    let res = await fetch(
      `https://fichuastore.herokuapp.com/api/user/${user.user_id}`,
      options
    );
    let data = await res.json();

    console.log(email);
    console.log(res);
    console.log(data);

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
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <div className='m-4' style={{ float: 'right' }}>
            <button className='btn btn-danger' onClick={logout}>
              Logout
            </button>
          </div>
          <div className='text-start'>
            <h1 className='txt-xl'>{`Welcome ${data.name}`}</h1>
            <p className=''>Update your profile</p>
          </div>

          <Form
            onSubmit={handleSubmit}
            className='px-5 flex flex-column align-items-center'
          >
            <FloatingLabel
              controlId='floatingInputEmailGrid'
              label='Name'
              className='mb-3'
            >
              <Form.Control
                className='border-secondary'
                id='floatingEmailInput'
                type='text'
                placeholder='John'
                value={data.name}
                name='name'
                onChange={(e) => setUname(e.target.value)}
              />
            </FloatingLabel>
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
                value={data.email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId='floatingInputEmailGrid'
              label='Email'
              className='mb-3'
            >
              <Form.Control
                className='border-secondary'
                id='floatingEmailInput'
                type='phone'
                placeholder='name@example.com'
                value={data.contact}
                name='phone'
                onChange={(e) => setContact(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingCityInput'
              label='City'
              className='mb-3'
            >
              <Form.Control
                className='border-secondary'
                id='floatingCityInput'
                type='text'
                placeholder='name@example.com'
                value={data.city}
                name='city'
                onChange={(e) => setCity(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingAddressInput'
              label='Address'
              className='mb-3'
            >
              <Form.Control
                className='border-secondary'
                id='floatingAddressInput'
                type='text'
                placeholder='18523 - 00200'
                value={data.address}
                name='address'
                onChange={(e) => setAddress(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingLocationInput'
              label='Location'
              className='mb-3'
            >
              <Form.Control
                className='border-secondary'
                id='floatingLocationInput'
                type='text'
                placeholder='name@example.com'
                value={data.location}
                name='location'
                onChange={(e) => setLocation(e.target.value)}
              />
            </FloatingLabel>

            <Navbar sticky='bottom' className='justify-content-between'>
              <Nav.Item className=''>
                <LinkContainer className='' to='/signup'>
                  <Button
                    variant='outline-secondary'
                    className='txt-b text-primary bg-light'
                  >
                    Back to shop
                  </Button>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item className=''>
                <Button className='txt-b text-white' type='submit'>
                  Update
                  <MdOutlineArrowForward className=' ms-2' />
                </Button>
              </Nav.Item>
            </Navbar>
          </Form>
          <Footer />
        </Container>
      )}
    </div>
  );
};

export default Profile;
