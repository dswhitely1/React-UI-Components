import React from 'react';
import './Button.scss';

const ActionButton = ({ button }) => {
	console.log('Action Called');
	return <p className={button.class}>{button.name}</p>;
};

export default ActionButton;
