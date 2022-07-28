import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';
import Logo from '../components/Logo';

const Layout = () => {
	return (
		<main>
			<Logo />
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;
