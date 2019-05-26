import React from 'react';
import './Calculator.scss';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import ButtonRows from '../ButtonComponents/ButtonRows';

const buttonData = [
	[ { name: 'clear', class: 'triple' }, { name: '/', class: 'action-button button' } ],
	[
		{ name: '7', class: 'button' },
		{ name: '8', class: 'button' },
		{ name: '9', class: 'button' },
		{ name: '*', class: 'action-button button' },
	],
	[
		{ name: '4', class: 'button' },
		{ name: '5', class: 'button' },
		{ name: '6', class: 'button' },
		{ name: '-', class: 'action-button button' },
	],
	[
		{ name: '1', class: 'button' },
		{ name: '2', class: 'button' },
		{ name: '3', class: 'button' },
		{ name: '+', class: 'action-button button' },
	],
	[ { name: '0', class: 'triple' }, { name: '=', class: 'action-button button' } ],
];

const Calculator = () => {
	console.log(buttonData);
	return (
		<div className='calculator-container'>
			<CalculatorDisplay />
			{buttonData.map((buttonRowData, i) => <ButtonRows bRows={buttonRowData} key={i} />)}
		</div>
	);
};

export default Calculator;
