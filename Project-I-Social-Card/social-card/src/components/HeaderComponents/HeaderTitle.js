import React from 'react';
import moment from 'moment';
import './Header.scss';

const HeaderTitle = () => {
	const currentDate = moment().format("D MMM").toLowerCase();
	return (
		<p>
			<strong>Lambda School</strong> <span>@LambdaSchool · {currentDate}</span>
		</p>
	);
};

export default HeaderTitle;
