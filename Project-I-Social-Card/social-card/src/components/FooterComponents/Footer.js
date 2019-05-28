import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faEnvelope, faComment} from '@fortawesome/free-regular-svg-icons';
import {faRetweet} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="social-icons">
			<span>
				<FontAwesomeIcon icon={faComment}/></span>
			<span><FontAwesomeIcon icon={faRetweet}/>
			6</span>
			<span><FontAwesomeIcon icon={faHeart}/>
			4</span>
			<span><FontAwesomeIcon icon={faEnvelope}/></span>
		</div>
	);
};

export default Footer;

