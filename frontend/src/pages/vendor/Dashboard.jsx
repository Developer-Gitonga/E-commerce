import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../../services/useFetch';

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const { data, loading, error } = useFetch(
		`https://fichuastore.herokuapp.com/api/user/${user.user_id}/`
	);

	return (
		<>
			<div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
				<h3 className='h3'>{data.bussiness || data.name}'s Dashboard</h3>
				<div className='btn-toolbar mb-2 mb-md-0'>
					<div className='btn-group me-2'>
						<button type='button' className='btn btn-sm btn-outline-secondary'>
							Share
						</button>
						<button type='button' className='btn btn-sm btn-outline-secondary'>
							Export
						</button>
					</div>
					<button
						type='button'
						className='btn btn-sm btn-outline-secondary dropdown-toggle'>
						<span data-feather='calendar'></span>
						This week
					</button>
				</div>
			</div>
			<div>
				<h5>More info about user's dashboard</h5>
				<h5>{data.business}</h5>
				<h4>{data.email}</h4>
				<h4>City: {data.city || 'no city available'}</h4>
				<h4>Location: {data.location || 'no location available'}</h4>
				<h4>Address: {data.address || 'no address available'}</h4>
			</div>
		</>
	);
};

export default Dashboard;
