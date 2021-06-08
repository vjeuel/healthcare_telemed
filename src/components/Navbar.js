import React from 'react';
import './Navbar.css';
import logo from './img/logo-horizontal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	return (
		<div>
			<nav>
				<img src={logo} className='logoTop' alt='logo'></img>
				<div className='navTop'>
					{/* <div></div> */}
					<a href='' className='button1'>
						<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />1 800-235-5656
					</a>
					<div></div>
					<a href='' className='button1'>
						<FontAwesomeIcon icon={faHome} className='faIcon' />
						HOME
					</a>
					<a href='' className='button1 buttonRight'>
						<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />
						CONTACT US
					</a>
					<a href='https://healthcaretelemed.letstalk.video/' className='button1'>
						<FontAwesomeIcon icon={faShieldAlt} className='faIcon' />
						LOGIN
					</a>
					<a href='' className='button1'>
						<FontAwesomeIcon icon={faUser} className='faIcon' />
						APPLY NOW
					</a>
				</div>
				<div className='navBottom'>
					<p>Solutions for</p>
					<div>
						<a href='' className='button2'>
							DME
						</a>
						<a href='' className='button2'>
							Pharmarcies
						</a>
						<a href='' className='button2'>
							Labs
						</a>
						<a href='' className='button2'>
							Businesses
						</a>
						<a href='' className='button2'>
							Providers
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
