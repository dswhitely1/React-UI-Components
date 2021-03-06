import React from 'react';
import './App.scss';
import Calculator from './components/Calculator/Calculator';

const App = () => {
	return (
		<div>
			<h3>Welcome to React Calculator</h3>
			<p>
				We have given you a starter project. You'll want to build out your components in their respective files, remove
				this code and replace it with the proper components.
			</p>
			<p>
				<strong>
					Don't forget to `default export` your components and import them here inside of this file in order to make
					them work.
				</strong>
			</p>
			<Calculator />
		</div>
	);
};

export default App;
