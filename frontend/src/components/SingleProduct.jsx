import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { LinkContainer } from 'react-router-bootstrap';
import CartContext from '../context/CartContext';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { AiOutlineShopping } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
function SingleProduct(props) {
	const { id, slug, name, price, photo } = props.product;
	const { cart, setCart } = useContext(CartContext);

	const handleAddToCart = () => {
		setCart((prev) => [
			...prev,
			{ ...props.product, count: 1, amount: parseFloat(price) },
		]);
		// localStorage.setItem('cartMain', JSON.stringify(cart));

		Toastify({
			text: `${name.substring(0, 10)}... added to cart successfully`,
			duration: 2000,
			gravity: 'top', // `top` or `bottom`
			position: 'right', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				background: 'green',
			},
		}).showToast();
	};

	return (
		<div className='m-1 p-2 bg-light rounded-3' id={id}>
			<div className=''>
				<LinkContainer to={`/product/${id}`}>
					<div className='special-img collection-img position-relative'>
						<img
							src={`https://res.cloudinary.com/fichua-store/${photo}`}
							className='w-100 rounded-3'
							alt=''
							style={{ width: '360px', height: '240px', objectFit: 'cover' }}
						/>
					</div>
				</LinkContainer>
				<div className='text-start'>
					<p className='fw-bold text-capitalize my-1 txt-xl'>
						{name.substring(0, 30)} {name.length >= 29 && '...'}
					</p>
					<div className='rating'>
						<span className='text-secondary'>
							<FontAwesomeIcon icon={solid('star')} />
						</span>
						<span className='text-secondary'>
							<FontAwesomeIcon icon={solid('star')} />
						</span>
						<span className='text-secondary'>
							<FontAwesomeIcon icon={solid('star')} />
						</span>
						<span className=''>
							<FontAwesomeIcon icon={solid('star')} />
						</span>
						<span className=''>
							<FontAwesomeIcon icon={solid('star')} />
						</span>
					</div>
					<div className='ctb'>
						<div className='ctbx'>
							<span className='fw-bold text-lg-start'>
								<span className='fw-light'>KES</span> {price}
							</span>
						</div>
						<div className='ctbx'>
							<Button
								variant='primary'
								onClick={() => handleAddToCart(props.product)}
								className='text-white'>
								<AiOutlineShopping className='crdicon' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleProduct;
