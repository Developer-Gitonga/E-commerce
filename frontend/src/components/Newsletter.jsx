import React from 'react';

function Newsletter() {
	return (
		<section id='newsletter' className='py-5 px-5'>
			<div className='container w-75 px-5'>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<div className='title text-center pt-5 pb-1'>
						<h2 className='position-relative d-inline-block ms-4 txt-xl'>
							Newsletter Subscription
						</h2>
					</div>

					<p className='text-center text-dark'>
						Subscribe to our newsletter to get the latest products and discount
						info
					</p>
					<div className='input-group mb-3 mt-5'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter Your Email ...'
						/>
						<button className='btn btn-primary text-white' type='submit'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
