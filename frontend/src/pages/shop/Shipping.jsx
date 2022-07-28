import React from 'react';
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

const Shipping = () => {
	return (
		<Container className='justify-content-center p-5 w-75'>
			<h1 className='text-primary px-5'>Shipping Address</h1>
			<Form className=' px-5 py-3'>
				<Row className='g-2 mb-4'>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='First name'>
							<Form.Control
								className=' border-secondary'
								type='text'
								placeholder='John'
							/>
						</FloatingLabel>
					</Col>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='Last name'>
							<Form.Control
								className=' border-secondary'
								type='text'
								placeholder='Doe'
							/>
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='g-2 mb-4'>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='Email address'>
							<Form.Control
								className=' border-secondary'
								type='email'
								placeholder='name@example.com'
							/>
						</FloatingLabel>
					</Col>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='Phone number'>
							<Form.Control
								className=' border-secondary'
								type='phone'
								placeholder='0712345678'
							/>
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='g-2 mb-3'>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='County'>
							<Form.Control
								className=' border-secondary'
								type='text'
								placeholder='Nairobi'
							/>
						</FloatingLabel>
					</Col>
					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='Town'>
							<Form.Control
								className=' border-secondary'
								type='text'
								placeholder='Nairobi'
							/>
						</FloatingLabel>
					</Col>

					<Col sm>
						<FloatingLabel controlId='floatingInputGrid' label='Address'>
							<Form.Control
								className=' border-secondary'
								type='text'
								placeholder='Ngong Lane, Ngong Rd.'
							/>
						</FloatingLabel>
					</Col>
				</Row>
			</Form>
			<Navbar sticky='bottom' className='justify-content-between mx-5'>
				<Nav.Item className='nav-wc'>
					<LinkContainer className='' to='/cart/billing'>
						<Button variant='outline-primary' className='txt-b btn-w'>
							Back
						</Button>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item className=''>
					<LinkContainer className='' to='/cart/billing'>
						<Button className='txt-b text-white'>
							Continue
							<MdOutlineArrowForward className=' ms-2' />
						</Button>
					</LinkContainer>
				</Nav.Item>
			</Navbar>
		</Container>
	);
};

export default Shipping;
