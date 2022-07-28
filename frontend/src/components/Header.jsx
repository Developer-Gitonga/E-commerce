import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {
	RiStore2Line,
	RiHeart2Line,
	RiSearch2Line,
	RiHomeSmileFill,
	RiAccountCircleFill,
	RiShoppingCart2Line,
} from 'react-icons/ri';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import CartContext from '../context/CartContext';

const Header = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { amount } = useSelector((state) => state.cart);
	const { cart } = useContext(CartContext);
	return (
		<>
			<Navbar
				className='justify-content-center'
				bg='white'
				variant='primary'
				sticky='top'>
				<Nav variant='pills'>
					<Nav.Item>
						<LinkContainer to='/' className='text-center'>
							<Nav.Link className='nav-w' eventkey='home'>
								<RiHomeSmileFill className='nav-c' />
								<p className='navText'>Home</p>
							</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='/shop' className='text-center'>
							<Nav.Link className='nav-w' eventkey='shop'>
								<RiStore2Line className='nav-c' />
								<p className='navText'>Shop</p>
							</Nav.Link>
						</LinkContainer>
					</Nav.Item>

					<Nav.Item>
						<LinkContainer to='/search' className='text-center'>
							<Nav.Link className='nav-w' eventkey='search'>
								<RiSearch2Line className='nav-c' />
								<p className='navText'>Search</p>
							</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='/cart' className='text-center'>
							<Nav.Link className='nav-w' eventkey='cart'>
								<div className='flt'>
									<RiShoppingCart2Line className='nav-c' />
									<Badge className='rounded-circle' pill bg='dark'>
										{cart.length}
									</Badge>
								</div>

								<p className='navText'>Cart</p>
							</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item>
						<LinkContainer to='profile' className='text-center'>
							<Nav.Link className='nav-w' eventkey='profile'>
								<RiAccountCircleFill className='nav-c' />
								<p className='navText'>Profile</p>
							</Nav.Link>
						</LinkContainer>
					</Nav.Item>
				</Nav>
			</Navbar>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Search something</Modal.Title>
				</Modal.Header>
				<Modal.Body border='light'>
					<Form>
						<FloatingLabel
							controlId='floatingInputGrid'
							label='Search something...'>
							<Form.Control
								className=' border-secondary'
								type='search'
								placeholder='search'
								autoFocus
							/>
						</FloatingLabel>
					</Form>
					<Nav.Item>
						<Button
							variant='outline'
							className='nav-c text-center text-primary'
							onClick={handleShow}>
							<RiSearch2Line className='nav-c' />
							<p className='navText'>Search</p>
						</Button>
					</Nav.Item>
				</Modal.Body>
				<Modal.Footer className='justify-content-between'>
					<Button
						variant='outline-primary'
						className='btn-w'
						onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' className='btn-w' onClick={handleClose}>
						Search
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
