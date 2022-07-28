import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const Error = () => {
	return (
		<Container>
			<h1 className='text-primary text-center'>
				The page you requested unfortunately does not Exist!!
			</h1>
			<Nav.Item className=''>
				<LinkContainer className='' to='/shop'>
					<Button
						variant='outline-primary'
						className='txt-b btn-w'
						onClick={<Navigate to='/shop' replace={true} />}>
						Back to shop
					</Button>
				</LinkContainer>
			</Nav.Item>
		</Container>
	);
};

export default Error;
