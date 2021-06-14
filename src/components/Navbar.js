import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './img/logo-horizontal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
	return (
		<div>
			<nav>
				<NavLink to='/' className='logoTop'>
					<img src={logo} alt='logo'></img>
				</NavLink>
				<div className='navTop'>
					<a href='tel:18002355656' className='button1'>
						<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />1 800-235-5656
					</a>
					{navTopLinks.map((data, index) => {
						return (
							<NavLink to={data.link} className='button1' key={index.link}>
								<FontAwesomeIcon icon={data.icon} className='faIcon' key={index.icon} />
								{data.menu} {index.menu}
							</NavLink>
						);
					})}
					<a
						href='https://healthcaretelemed.letstalk.video/'
						target='_blank'
						rel='noopener noreferrer'
						className='button1'>
						<FontAwesomeIcon icon={faShieldAlt} className='faIcon' />
						LOGIN
					</a>
				</div>
				<div className='navBottom'>
					<span>Solutions for</span>
					{/* <div> */}
					{navBottomLinks.map((data, index) => {
						return (
							<NavLink to={data.link} className='button2' key={index.link}>
								{data.menu}
								{index.menu}
							</NavLink>
						);
					})}
					{/* </div> */}
				</div>
			</nav>
		</div>
	);
}

const navTopLinks = [
	{
		menu: 'HOME',
		link: '/',
		icon: faHome,
	},
	{
		menu: 'CONTACT US',
		link: '/contact',
		icon: faPhoneAlt,
	},
];

const navBottomLinks = [
	{
		menu: 'DME',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Pharmacies',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Labs',
		link: '/dmePhaLabBus',
	},
	{
		menu: 'Providers',
		link: '/providers',
	},
];

export default NavBar;
