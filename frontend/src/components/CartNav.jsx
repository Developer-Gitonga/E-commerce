import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';

const CartNav = () => {
	return (
		<Container className='p-4'>
			<Navbar className='justify-content-center ' bg='light'>
				<Nav justify variant='tabs'>
					<Nav.Item>
						<LinkContainer to='/cart'>
							<Nav.Link>Cart</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='/cart/checkout'>
							<Nav.Link>Checkout</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='/cart/shipping'>
							<Nav.Link>Shipping</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='/cart/done'>
							<Nav.Link>Done</Nav.Link>
						</LinkContainer>
					</Nav.Item>
				</Nav>
			</Navbar>
		</Container>
	);
};

export default CartNav;

// onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
