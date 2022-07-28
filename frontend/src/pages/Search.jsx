import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowForward } from 'react-icons/md';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Search = () => {
	return (
		<Container className='p-5'>
			<h1 className='text-primary text-center p-5'>Search</h1>
			<Form>
				<FloatingLabel
					controlId='floatingInputGrid'
					label='Search something...'>
					<Form.Control
						className=' border-secondary'
						type='search'
						placeholder='search'
					/>
				</FloatingLabel>
				<Navbar className='justify-content-between mt-3'>
					<Nav.Item className=''>
						<LinkContainer className='' to='/shop'>
							<Button variant='outline-primary' className='txt-b btn-w'>
								Back
							</Button>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item className=''>
						<Button type='submit' className='txt-b text-white'>
							Submit
							<MdOutlineArrowForward className=' ms-2' />
						</Button>
					</Nav.Item>
				</Navbar>
			</Form>
		</Container>
	);
};

export default Search;
