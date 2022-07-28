import React, { useEffect, useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { FireWorks } from '../components';
import PaypalContext from '../context/PaypalContext';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

const Success = () => {
  const { user } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);
  // const { progress, setProgress } = useState('');
  const { data, setData } = useContext(PaypalContext);
  const { payer, create_time, update_time } = data;

  const one_order = async (product_id, vendor, totalCount, totalAmount) => {
    const body_data = {
      customer: user.user_id,
      product: product_id,
      vendor_id: vendor,
      count: totalCount,
      amount: totalAmount,
      paypal_payer_email: payer.email_address,
      paypal_payer_id: payer.payer_id,
      paypal_payer_name: payer.name.given_name,
      paypal_payment_created: create_time,
      paypal_payment_updated_time: update_time,
    };
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body_data),
    };
    let res = await fetch(
      'https://fichuastore.herokuapp.com/api/shop/post/order/',
      options
    );
    let data = await res.json();
    console.log(data);
    console.log(res);
  };

  useEffect(() => {
    for (let c of cart) {
      let { id, vendor, count, amount } = c;
      let index = cart.indexOf(c);
      console.log(index + 1);
      let final_index = index + 1;
      one_order(id, vendor, count, amount);
    }
    setCart([]);
  }, []);
  return (
    <Container className='p-4'>
      <FireWorks />
      <h1 className='text-center text-primary'>Success!</h1>
      {/* <h3>{progress}</h3> */}
      {cart.map((item) => (
        <h5 className='txt-xl'>{item.name} has been placed successfully</h5>
      ))}
      <Navbar fixed='bottom' className='justify-content-center m-5'>
        <Nav.Item className='nav-wc'>
          <LinkContainer className='' to='/shop'>
            <Button
              className='txt-b'
              onClick={<Navigate to='/shop' replace={true} />}
            >
              Back to Shop
              <MdOutlineArrowForward className=' ms-2' />
            </Button>
          </LinkContainer>
        </Nav.Item>
      </Navbar>
    </Container>
  );
};

export default Success;
