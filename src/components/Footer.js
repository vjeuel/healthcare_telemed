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
				<a href='https://www.facebook.com/profile.php?id=100069117375279' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faFacebookF} className='faBrands'></FontAwesomeIcon>
				</a>
				<a href='https://twitter.com/HTelemed' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faTwitter} className='faBrands'></FontAwesomeIcon>
				</a>
				<a
					href='https://www.linkedin.com/in/healthcare-telemed-4a0396214/'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faLinkedinIn} className='faBrands'></FontAwesomeIcon>
				</a>
			</div>
			<p>
				<FontAwesomeIcon icon={faCopyright} className='faIcon'></FontAwesomeIcon>2021 by Healthcare Telemed. All
				rights reserved. Created by Grafk Design
			</p>
		</footer>
	);
}

export default Footer;
