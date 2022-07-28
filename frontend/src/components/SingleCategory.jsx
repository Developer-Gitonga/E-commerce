import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const SingleCategory = ({ name, photo, slug, id }) => {
	return (
		<div className='col-md-3'>
			<div className='ctcrd p-1'>
				<LinkContainer to={`/category/${slug}/${id}`}>
					<div className='d-flex justify-content-between align-items-center p-2 ctgrd'>
						<div className='txtn text-dark '>{name}</div>
						<img
							src={`https://res.cloudinary.com/fichua-store/${photo}`}
							height='100'
							width='100'
							alt={name}
							className='rounded-3'
						/>
					</div>
				</LinkContainer>
			</div>
		</div>
	);
};

export default SingleCategory;
