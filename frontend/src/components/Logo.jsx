import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import LogoImg from '../assets/logo.svg';
const Logo = () => {
	return (
		<LinkContainer to={'/'} id='logo'>
			<img src={LogoImg} alt='logo' className='logo' />
		</LinkContainer>
	);
};

export default Logo;
