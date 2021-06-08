import React from 'react';
import './Footer.css';
import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
	return (
		<footer>
			<img src={logo} className='footerLogo' />
			<p>
				<FontAwesomeIcon icon={faCopyright} className='faIcon'></FontAwesomeIcon>2021 by Healthcare Telemed. Created
				by G-well
			</p>
		</footer>
	);
}

export default Footer;
