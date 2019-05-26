import React from 'react';
import './Button.scss';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonRows = ({ bRows }) => {
	return (
		<div className='button-rows'>
			{bRows.map(
				(button, i) =>
					button.class === 'triple' ? (
						<ActionButton button={button} key={i} />
					) : (
						<NumberButton button={button} key={i} />
					),
			)}
		</div>
	);
};

export default ButtonRows;
