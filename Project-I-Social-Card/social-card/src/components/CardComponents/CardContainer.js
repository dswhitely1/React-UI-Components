import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
	return (
		<div className='card'>
			<a href='https://www.reactjs.org'>
				<CardBanner />
				<CardContent />
			</a>
		</div>
	);
};

export default CardContainer;
