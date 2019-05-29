import React from 'react';
import './Button.scss';

const NumberButton = ({ button }) => <p className={button.class}>{button.name}</p>;

export default NumberButton;
