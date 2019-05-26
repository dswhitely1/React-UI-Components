import React from 'react';
import './Button.scss';

const ActionButton = ({ button }) => <p className={button.class}>{button.name}</p>;

export default ActionButton;
