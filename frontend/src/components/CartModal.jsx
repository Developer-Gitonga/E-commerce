import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CartModal = () => {
	const [show, setShow] = useState(false);
	const [fullscreen, setFullscreen] = useState(true);

	function handleShow() {
		setFullscreen(true);
		setShow(true);
	}

	return (
		<>
			<Button variant='primary' className='btn-w' onClick={() => handleShow()}>
				Click
			</Button>
			<Modal
				show={show}
				fullscreen={fullscreen}
				onHide={() => setShow(false)}
				aria-labelledby='example-custom-modal-styling-title'>
				<Modal.Header closeButton>
					<Modal.Title id='example-custom-modal-styling-title'>
						Custom Modal Styling
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
						commodi aspernatur enim, consectetur. Cumque deleniti temporibus
						ipsam atque a dolores quisquam quisquam adipisci possimus
						laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
						accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
						reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
						deleniti rem!
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CartModal;
