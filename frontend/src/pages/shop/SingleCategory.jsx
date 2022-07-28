import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, SingleProduct, Spinner } from '../../components';
import '../../styles/extra.css';
import useFetch from '../../services/useFetch';

function SingleCategory() {
	const { id, name } = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { data, loading, error } = useFetch(
		`https://fichuastore.herokuapp.com/api/shop/certain_category/${id}/`
	);
	// console.log(data);

	return (
		<>
			<section id={name} className='py-5'>
				<div className='container'>
					<div className='title text-center'>
						<h2
							style={{ textTransform: 'capitalize' }}
							className='position-relative d-inline-block'>
							{name}
						</h2>
					</div>
				</div>
				<div className='container special-list'>
					<div className='row'>
						{loading ? (
							<Spinner />
						) : (
							data.map((prod) => {
								return (
									<div key={prod.id} className='col-lg-3'>
										<SingleProduct product={prod} />
									</div>
								);
							})
						)}
					</div>
				</div>
			</section>
			<nav aria-label='Page navigation example'>
				<ul className='pagination justify-content-center'>
					<li className='page-item disabled'>
						<a className='page-link' href='/'>
							Previous
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							1
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							2
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							3
						</a>
					</li>
					<li className='page-item'>
						<a className='page-link' href='/'>
							Next
						</a>
					</li>
				</ul>
			</nav>
			<Footer />
		</>
	);
}

export default SingleCategory;
