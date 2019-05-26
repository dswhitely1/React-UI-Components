import React from 'react';
import './Button.scss';

const NumberButton = ({ button }) => {
	return <p className={button.class}>{button.name}</p>;
};

export default NumberButton;
