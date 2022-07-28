import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';

const Cart = () => {
  return (
    <Container>
      <Navbar className='justify-content-center' variant='secondary'>
        <Nav
          bg='secondary'
          className='bg-light border-1 border-secondary'
          fill
          variant='tabs'
        >
          <Nav.Item className='nav-wc'>
            <LinkContainer className='' to='/cart'>
              <Nav.Link className='text-dark txt-b' eventkey='cart'>
                01. Cart
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item className='nav-wc'>
            <LinkContainer to='/cart/shipping'>
              <Nav.Link className='text-dark txt-b' eventkey='shipping'>
                02. Shipping
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item className='nav-wc'>
            <LinkContainer to='/cart/billing'>
              <Nav.Link className='text-dark txt-b' eventkey='billing'>
                03. Billing
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item className='nav-wc'>
            <LinkContainer to=''>
              <Nav.Link className='text-dark txt-b' eventkey='done'>
                04. Done
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Outlet />
    </Container>
  );
};

export default Cart;
