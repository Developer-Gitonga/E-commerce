import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

function Discount() {
	return (
		<section id='offers' className='brs m-3'>
			<div className='tint px-5 brs'>
				<div className='row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start'>
					<div className='offers-content'>
						<span className='text-secondary'>Get started for FREE!!</span>
						<h2 className='mt-2 mb-2 text-white txt-xl text-lg-start'>
							Join our Vendor Movement
						</h2>
						<div className='mb-4'>
							<span className='text-white'>
								Post and manage all your products to start selling
							</span>
						</div>
						<LinkContainer to={'/dashboard'}>
							<Button
								variant='primary'
								type='button'
								className='px-4 py-2 text-white '>
								Join now
							</Button>
						</LinkContainer>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Discount;
