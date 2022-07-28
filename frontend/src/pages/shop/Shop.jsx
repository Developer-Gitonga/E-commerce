import React, { useEffect, useState } from 'react';
import { Footer, SingleProduct, Spinner } from '../../components';
import Container from 'react-bootstrap/Container';
import useFetch from '../../services/useFetch';

const allProdUrl = 'https://fichuastore.herokuapp.com/api/shop/products/';
const fashionUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/3d815131-b9b9-42df-9753-c606e911ef7b/';
const elecrtonicsUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/3a000ce5-f591-4806-b8e5-6a63f71d49a1/';
const outdoorsUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/52a3d6cc-14fd-49e1-ad38-4d78a7afa342/';
const beautyUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/5306c478-baee-42d8-94c3-f7fc2fe74533/';
const homeUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/3d31cf60-9d42-42e4-8cbb-78d25056fbb1/';
const groceriesUrl =
	'https://fichuastore.herokuapp.com/api/shop/certain_category/037453bb-a595-4111-81c7-ff03c92cbab5/';

const Shop = () => {
	const [categoryUrl, setCategoryUrl] = useState(allProdUrl);
	const { data: products, loading, error } = useFetch(categoryUrl);
	const [selected, setSelected] = useState('All');
	console.log(selected);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// if (loading) return <Spinner />;

	// if (error) console.log(error);

	return (
		<Container fluid>
			<section className=''>
				<div className='container'>
					<h1 className='text-primary text-center mt-5'>Shop</h1>

					<div className='row g-0'>
						<div className='d-flex flex-wrap justify-content-center mt-3 mb-2 filter-button-group'>
							<button
								type='button'
								className={`btn m-2  ${
									selected === 'All' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(allProdUrl);
									setSelected('All');
								}}>
								All
							</button>
							<button
								type='button'
								className={`btn m-2  ${
									selected === 'Electronics' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(elecrtonicsUrl);
									setSelected('Electronics');
								}}>
								Electronics
							</button>
							<button
								type='button'
								className={`btn m-2  ${
									selected === 'Home' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(homeUrl);
									setSelected('Home');
								}}>
								Home
							</button>
							<button
								type='button'
								className={`btn m-2  ${
									selected === 'Beauty' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(beautyUrl);
									setSelected('Beauty');
								}}>
								Beauty
							</button>
							<button
								type='button'
								className={`btn m-2 ${
									selected === 'Groceries' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(groceriesUrl);
									setSelected('Groceries');
								}}>
								Groceries
							</button>

							<button
								type='button'
								className={`btn m-2  ${
									selected === 'Fashion' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(fashionUrl);
									setSelected('Fashion');
								}}>
								Fashion
							</button>
							<button
								type='button'
								className={`btn m-2 ${
									selected === 'Outdoors' && 'active-filter-btn'
								}`}
								onClick={(e) => {
									setCategoryUrl(outdoorsUrl);
									setSelected('Outdoors');
								}}>
								Outdoors
							</button>
						</div>

						{loading ? (
							<Spinner />
						) : (
							<div className='crdrw'>
								{products.map((item) => (
									<SingleProduct key={item.id} product={item} />
								))}
							</div>
						)}

						{error && (
							<h3 style={{ color: 'red' }}>Error occured {error.message}</h3>
						)}
					</div>
				</div>
			</section>

			<Footer />
		</Container>
	);
};

export default Shop;
