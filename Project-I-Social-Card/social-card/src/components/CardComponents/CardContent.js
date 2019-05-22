import React from 'react';
import './Card.scss';

const CardContent = () => {
	return (
		<div className='card-content'>
			<strong>
				<p>Get started with React</p>
			</strong>
			<p>React makes it painless to create interactive UIs. Design simple view for each state in your application.</p>
			<p className='text'>reactjs.org</p>
		</div>
	);
};

export default CardContent;
