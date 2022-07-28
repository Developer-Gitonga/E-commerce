import React, { useState } from 'react';
import { Footer } from '../components';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { useNavigate } from 'react-router-dom';

const Activation = () => {
	const [activationData, setActivationData] = useState({
		uid: '',
		token: '',
	});
	// console.log(activationData);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(activationData);
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(activationData),
		};
		let res = await fetch(
			'https://fichuastore.herokuapp.com/api/auth/users/activation/',
			options
		);
		let data = await res.json();
		console.log(data);
		console.log(res);
		if (res.status === 204) {
			Toastify({
				text: 'Your Account Has been activated. You can login',
				duration: 4000,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'green',
				},
			}).showToast();
			navigate('/login');
		} else {
			Toastify({
				text: data.detail,
				duration: 4000,
				gravity: 'bottom', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
			}).showToast();
			navigate('/login');
		}
	};

	return (
		<>
			<div className='container loginContainer mt-5'>
				<main className='form-signin text-center'>
					<form onSubmit={(e) => handleSubmit(e)}>
						<h1 className='h3 mb-3 fw-normal'>Activate Your Account</h1>

						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='floatingInput'
								placeholder='UID'
								name='uid'
								value={activationData.uid}
								onChange={(e) =>
									setActivationData((prev) => ({
										...prev,
										uid: e.target.value,
									}))
								}
							/>
							<label htmlFor='floatingInput'>UID</label>
						</div>
						<br></br>
						<div className='form-floating'>
							<input
								type='text'
								className='form-control'
								id='floatingInput'
								placeholder='Token'
								name='token'
								value={activationData.token}
								onChange={(e) =>
									setActivationData((prev) => ({
										...prev,
										token: e.target.value,
									}))
								}
							/>
							<label htmlFor='floatingInput'>Token</label>
						</div>
						<br></br>

						<button className='w-100 btn btn-lg btn-primary' type='submit'>
							Activate
						</button>
					</form>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default Activation;
