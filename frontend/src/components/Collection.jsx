import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import useFetch from '../services/useFetch';
import { Spinner } from '.';

const bestSellerUrl =
	'https://fichuastore.herokuapp.com/api/shop/similar_items/3a000ce5-f591-4806-b8e5-6a63f71d49a1/';
const fearuredUrl =
	'https://fichuastore.herokuapp.com/api/shop/similar_items/5306c478-baee-42d8-94c3-f7fc2fe74533/';
const newArrivalUrl =
	'https://fichuastore.herokuapp.com/api/shop/similar_items/3d31cf60-9d42-42e4-8cbb-78d25056fbb1/';

function Collection() {
	const [selected, setSelected] = useState('Best Sellers');
	const [collectionUrl, setCollectionUrl] = useState(bestSellerUrl);
	const { data, loading } = useFetch(collectionUrl);
	console.log(data);

	return (
		<section id='collection' className='py-5 px-3'>
			<div className=''>
				<h1 className='txt-xl text-lg-center'>New Collections</h1>

				<div className='row g-0'>
					<div className='d-flex flex-wrap justify-content-center mt-5 filter-button-group'>
						<Nav fill variant='pills'>
							<Nav.Item>
								<Button
									type='button'
									variant='primary'
									className={`m-2 cbtn ${
										selected === 'Best Sellers' ? 'active-filter-btn' : ''
									}`}
									onClick={() => {
										setSelected('Best Sellers');
										setCollectionUrl(bestSellerUrl);
									}}>
									Best Sellers
								</Button>
							</Nav.Item>
							<Nav.Item>
								<Button
									variant='primary'
									type='button'
									className={`m-2 cbtn ${
										selected === 'Featured' ? 'active-filter-btn' : ''
									}`}
									onClick={() => {
										setSelected('Featured');
										setCollectionUrl(fearuredUrl);
									}}>
									Featured
								</Button>
							</Nav.Item>
							<Nav.Item>
								<Button
									variant='primary'
									type='button'
									className={`m-2 cbtn ${
										selected === 'New Arrival' ? 'active-filter-btn' : ''
									}`}
									onClick={() => {
										setSelected('New Arrival');
										setCollectionUrl(newArrivalUrl);
									}}>
									New Arrivals
								</Button>
							</Nav.Item>
							<Nav.Item>
								<LinkContainer to={'/shop'}>
									<Button variant='primary' type='button' className='m-2 cbtn'>
										All
									</Button>
								</LinkContainer>
							</Nav.Item>
						</Nav>
					</div>
					{loading ? (
						<Spinner />
					) : (
						<div className='crdrw'>
							{data.map((prod) => (
								<SingleProduct key={prod.id} product={prod} />
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Collection;
