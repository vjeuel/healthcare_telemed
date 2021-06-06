import React from 'react';
import './Navbar.css';
import logo from './img/logo.svg';

function Navbar() {
	return (
		<div>
			<nav>
				<img src={logo} className='logoTop' alt='logo'></img>
				<div className='navTop'>
					<div></div>
					<a href='' className='button1 buttonPhone'>
						1 800-235-5656
					</a>
					<div></div>
					<a href='' className='button1'>
						HOME
					</a>
					<a href='' className='button1 buttonRight'>
						CONTACT US
					</a>
					<a href='' className='button1'>
						Login
					</a>
					<a href='' className='button1'>
						Apply Now
					</a>
				</div>
				<div className='navBottom'>
					<p>Solutions for</p>{' '}
					<a href='' className='button2'>
						DME
					</a>
					<a href='' className='button2'>
						Pharmacies
					</a>
					<a href='' className='button2'>
						Provider
					</a>
					<a href='' className='button2'>
						Labs
					</a>
					<a href='' className='button2'>
						Businesses
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
