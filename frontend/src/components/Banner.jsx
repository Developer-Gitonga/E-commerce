import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { deals } from '../lib/data';

const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			id='carousel'
			className='rounded-3 p-3'
			pause
			activeIndex={index}
			onSelect={handleSelect}
			nextIcon={<BsFillArrowRightCircleFill className='banner-icon' />}
			prevIcon={<BsFillArrowLeftCircleFill className='banner-icon' />}>
			{deals.map((deal) => (
				<Carousel.Item interval={9000} className='banner item' key={deal.id}>
					<img className='banner-img' src={deal.photo} alt='First slide' />

					<Carousel.Caption className='text-lg-start'>
						<h1 className='text-lg-start txt-xl text-secondary'>
							{deal.title}
						</h1>
						<h4 className='text-lg-start'>{deal.caption}</h4>
						<Link to={deal.slug}>
							<Button variant='primary' className='mt-4 px-4 py-2 text-white'>
								Discover
							</Button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
