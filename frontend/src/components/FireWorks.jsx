import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const FireWorks = () => {
	const { width, height } = useWindowSize();
	return (
		<Confetti
			width={width}
			height={height}
			numberOfPieces={200}
			tweenDuration={5000}
		/>
	);
};

export default FireWorks;
