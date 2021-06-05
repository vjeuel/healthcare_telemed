import React from 'react';
import './Navbar.css';
import logo from './img/logo.svg';

function Navbar() {
	return (
		<div>
			<nav>
				<img src={logo} className='logoTop'></img>
				<div className='navTop'>
					<a>1 800-235-5656</a>
					<a>Login</a>
				</div>
				<div className='navBottom'>
					<a>Home</a>
					<a>Apply Now</a>
					<p>
						Solutions for <a>DME</a>
						<a>Pharmacies</a>
						<a>Provider</a>
						<a>Labs</a>
						<a>Businesses</a>
					</p>
					<a>Contact us</a>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
