import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PayPal from '../../components/PayPal';
import CartContext from '../../context/CartContext';
import PaypalContext from '../../context/PaypalContext';

const Billing = () => {
  const [usePayPalBtn, setUsePayPalBtn] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { data, setData } = useContext(PaypalContext);

  return (
    <>
      <Container className='p-5 justify-content-center align-items-center w-75'>
        <h1 className='px-5 text-primary'>Billing Address</h1>
        <Form className='px-5 py-3'>
          <Row className='g-2 mb-4'>
            <Col sm>
              <FloatingLabel controlId='floatingInputGrid' label='Card number'>
                <Form.Control
                  className=' border-secondary'
                  type='text'
                  placeholder='0000 0000 0000 0000'
                  required
                  autoComplete='false'
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='g-2 mb-3'>
            <Col sm>
              <FloatingLabel controlId='floatingInputGrid' label='Expiry month'>
                <Form.Control
                  className=' border-secondary'
                  type='text'
                  placeholder='MM'
                  autoComplete='false'
                  required
                />
              </FloatingLabel>
            </Col>
            <Col sm>
              <FloatingLabel controlId='floatingInputGrid' label='Expiry year'>
                <Form.Control
                  className=' border-secondary'
                  type='text'
                  placeholder='YYYY'
                  autoComplete='false'
                  required
                />
              </FloatingLabel>
            </Col>
            <Col sm>
              <FloatingLabel controlId='floatingInputGrid' label='CVV'>
                <Form.Control
                  className=' border-secondary'
                  type='password'
                  placeholder='000'
                  autoComplete='false'
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FloatingLabel
                controlId='floatingInputGrid'
                label='Card holder full name'
              >
                <Form.Control
                  className=' border-secondary'
                  type='text'
                  placeholder='Full name'
                  autoComplete='false'
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
        <Navbar
          sticky='bottom'
          className='justify-content-between align-items-center mx-5'
        >
          <Nav.Item className='nav-wc'>
            <LinkContainer className='' to='/cart'>
              <Button variant='outline-primary' className='txt-b btn-w'>
                Back
              </Button>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item className='nav-wc'>
            {/* <LinkContainer className='' to='/cart'> */}
            <Button
              variant='outline-primary'
              onClick={() => setUsePayPalBtn((prev) => !prev)}
              className='txt-b btn-w'
            >
              Paypal
            </Button>
            {/* </LinkContainer> */}
          </Nav.Item>
          {/* <Nav.Item className=''>
            <LinkContainer className='' to='/cart/done'>
              <Button className='txt-b'>
                Continue
                <MdOutlineArrowForward className=' ms-2' />
              </Button>
            </LinkContainer>
          </Nav.Item> */}
        </Navbar>
      </Container>
      {usePayPalBtn && (
        <Container className='p-3 justify-content-center align-items-center w-75'>
          <PayPal cart={cart} setCart={setCart} setData={setData} />
        </Container>
      )}
    </>
  );
};

export default Billing;
