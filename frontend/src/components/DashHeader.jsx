import React from 'react';
import { Link } from 'react-router-dom';

function DashHeader() {
	return (
		<>
			<div
				style={{
					display: 'flex',
					gap: '40px',
					marginBottom: '20px',
					cursor: 'pointer',
				}}>
				<Link to='/dashboard'>
					<h5>User_Products</h5>
				</Link>
				<Link to='/dashboard/post'>
					<h5>Post_product</h5>
				</Link>
			</div>
		</>
	);
}

export default DashHeader;
