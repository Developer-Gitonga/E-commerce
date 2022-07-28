import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
	return (
		<footer className='bg-dark py-5 brs mx-3 my-4'>
			<div className='container'>
				<div className='row text-white g-4'>
					<div className='col-md-6 col-lg-3'>
						<a
							className='text-uppercase text-decoration-none brand text-secondary txt-b'
							href='index.html'>
							Fichua Store
						</a>
						<p className='text-white mt-3'>We describe ourselves here</p>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-bold text-secondary'>Links</h5>
						<ul className='list-unstyled'>
							<li className='my-3'>
								<a href='/' className='text-white text-decoration-none'>
									<FontAwesomeIcon
										className='text-secondary pe-2'
										icon={solid('chevron-right')}
									/>
									<span className='txt-sm'>Home</span>
								</a>
							</li>
							<li className='my-3'>
								<a href='/' className='text-white text-decoration-none'>
									<FontAwesomeIcon
										className='text-secondary pe-2'
										icon={solid('chevron-right')}
									/>
									<span className='txt-sm'>All Products</span>
								</a>
							</li>
							<li className='my-3'>
								<a
									href='/dashboard'
									className='text-white text-decoration-none'>
									<FontAwesomeIcon
										className='text-secondary pe-2'
										icon={solid('chevron-right')}
									/>
									<span className='txt-sm'>Vendors</span>
								</a>
							</li>
							<li className='my-3'>
								<a href='/login' className='text-white text-decoration-none'>
									<FontAwesomeIcon
										className='text-secondary pe-2'
										icon={solid('chevron-right')}
									/>
									<span className='txt-sm'>Log in</span>
								</a>
							</li>
							<li className='my-3'>
								<a href='/signup' className='text-white text-decoration-none'>
									<FontAwesomeIcon
										className='text-secondary pe-2'
										icon={solid('chevron-right')}
									/>
									<span className='txt-sm '>Sign up</span>
								</a>
							</li>
						</ul>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-bold mb-3 text-secondary'>Contact Us</h5>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3 text-white'>
								<FontAwesomeIcon
									className='text-secondary'
									icon={solid('map-marked-alt')}
								/>
							</span>
							<span className='fw-light text-white'>Nairobi, Kenya</span>
						</div>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3 text-white'>
								<FontAwesomeIcon
									className='text-secondary'
									icon={solid('envelope')}
								/>
							</span>
							<span className='fw-light text-white'>fichuastore@gmail.com</span>
						</div>
						<div className='d-flex justify-content-start align-items-start my-2'>
							<span className='me-3 text-white'>
								<FontAwesomeIcon
									className='text-secondary'
									icon={solid('phone-alt')}
								/>
							</span>
							<span className='fw-light text-white'>+254 0000000</span>
						</div>
					</div>

					<div className='col-md-6 col-lg-3'>
						<h5 className='fw-bold mb-3 text-secondary'>Follow Us</h5>
						<div>
							<ul className='list-unstyled d-flex'>
								<li>
									<a
										href='/'
										className='text-white text-decoration-none fs-4 me-4'>
										<FontAwesomeIcon
											className='text-secondary'
											icon={brands('facebook')}
										/>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-white text-decoration-none fs-4 me-4'>
										<FontAwesomeIcon
											className='text-secondary'
											icon={brands('twitter')}
										/>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-white text-decoration-none fs-4 me-4'>
										<FontAwesomeIcon
											className='text-secondary'
											icon={brands('instagram')}
										/>
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-white text-decoration-none fs-4 me-4'>
										<FontAwesomeIcon
											className='text-secondary'
											icon={brands('pinterest')}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
