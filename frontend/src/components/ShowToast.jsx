import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const ShowToast = ({ children }) => {
	const [show, toggleShow] = useState(false);

	return (
		<>
			{!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
			<Toast show={show} onClose={() => toggleShow(false)}>
				<Toast.Header>
					<strong className='mr-auto'>Show Toast</strong>
				</Toast.Header>
				<Toast.Body>{children}</Toast.Body>
			</Toast>
		</>
	);
};

export default ShowToast;
