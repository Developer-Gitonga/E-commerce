import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { MdClose } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CardGroup from 'react-bootstrap/CardGroup';
import CartContext from '../context/CartContext';

const OrderCard = (props) => {
	const { name, count, details, price, photo, id, amount } = props.product;
	const { cart, setCart } = useContext(CartContext);
	const increment = () => {
		console.log('increment');
		let newCart = [];
		setCart((prev) => {
			prev.forEach((item) => {
				if (item.id === id) {
					newCart.push({
						...item,
						count: count + 1,
						amount: amount + parseFloat(price),
					});
				} else {
					newCart.push(item);
				}
			});
			return newCart;
		});
	};
	const decrement = () => {
		console.log('decrement');
		if (count === 1) return;
		let newCart = [];
		setCart((prev) => {
			prev.forEach((item) => {
				if (item.id === id) {
					newCart.push({
						...item,
						count: count - 1,
						amount: amount - parseFloat(price),
					});
				} else {
					newCart.push(item);
				}
			});
			return newCart;
		});
		if (count < 1) return reset();
	};
	const reset = () => {
		console.log('reset');
		setCart((prev) => {
			return prev.filter((item) => item.id !== id);
		});
	};

	return (
		<Card
			border='secondary'
			className='mb-2 border-top-0 border-end-0 border-start-0 rounded-0 align-items-center'>
			<Container className='p-3 justify-content-between'>
				<Row>
					<Col xs={1}>
						<img
							className='order-img'
							src={`https://res.cloudinary.com/fichua-store/${photo}`}
							alt='First slide'
						/>
					</Col>
					<Col xs={5} className='ctr'>
						<CardGroup className='justify-content-between align-items-center'>
							<Card.Title className='text-primary'>
								{name.substring(0, 55)} {name.length >= 20 && '...'}
							</Card.Title>
							<Card.Text className='text-dark'>
								{details.substring(0, 55)} {details.length >= 20 && '...'}
							</Card.Text>
						</CardGroup>
					</Col>
					<Col xs={3} className='ctr'>
						<CardGroup className='align-items-center justify-content-between'>
							<Button variant='outline-dark' onClick={decrement}>
								<AiOutlineMinus />
							</Button>
							<Card.Subtitle className='text-muted p-3'>{count}</Card.Subtitle>
							<Button className='text-white' onClick={increment}>
								<AiOutlinePlus />
							</Button>
						</CardGroup>
					</Col>
					<Col xs={2} className='ctr'>
						<CardGroup className='justify-content-center align-items-center'>
							<Card.Subtitle className='text-muted'>
								{count * price}
							</Card.Subtitle>
						</CardGroup>
					</Col>
					<Col xs={1} className='ctr'>
						<CardGroup className='justify-content-end align-items-end'>
							<Button variant='outline-danger' onClick={reset}>
								<MdClose />
							</Button>
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};

export default OrderCard;
