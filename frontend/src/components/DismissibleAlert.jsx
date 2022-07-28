import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function DismissibleAlert() {
	const [show, setShow] = useState(false);

	if (show) {
		return (
			<Alert variant='primary' onClose={() => setShow(false)} dismissible>
				<Alert.Heading>
					I am an alert of type <span className='dangerText'>danger</span>! But
					my color is Teal!
				</Alert.Heading>
				<p>
					By the way the button you just clicked is an{' '}
					<span className='infoText'>Info</span> button but is using the color
					Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusantium debitis deleniti distinctio impedit officia reprehenderit
					suscipit voluptatibus. Earum, nam necessitatibus!
				</p>
			</Alert>
		);
	}
	return (
		<Button variant='info' onClick={() => setShow(true)}>
			Show Custom Styled Alert
		</Button>
	);
}

export default DismissibleAlert;
