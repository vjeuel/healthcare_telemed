import React from 'react';
import './Footer.css';
import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<img src={logo} className='footerLogo' alt='Logo' />
			<div className='socialMedia'>
				<FontAwesomeIcon icon={faFacebookF} className='faBrands'></FontAwesomeIcon>
				<FontAwesomeIcon icon={faTwitter} className='faBrands'></FontAwesomeIcon>
				<FontAwesomeIcon icon={faLinkedinIn} className='faBrands'></FontAwesomeIcon>
			</div>
			<p>
				<FontAwesomeIcon icon={faCopyright} className='faIcon'></FontAwesomeIcon>2021 by Healthcare Telemed. All
				rights reserved. Created by Grafk Design
			</p>
		</footer>
	);
}

export default Footer;
