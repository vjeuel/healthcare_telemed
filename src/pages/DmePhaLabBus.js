import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/DmePhaLabBus.css';
import ContactForm from '../components/ContactForm';
import icon2 from '../img/icon_2.svg';
import icon4 from '../img/icon_4.svg';

function DmePhaLabBus() {
	return (
		<div>
			<div className='jumbotron'>
				<Navbar />
				<section className='dme'>
					<div className='dmeBox'>
						<div className='dmeTextBox'>
							<h2>
								We have solutions for a<br /> diversity of businesses​
							</h2>
							<div className='dmeTextContainer'>
								<img src={icon2} className='dmeIcon' alt='' />
								<p>
									Once you’ve completed the application process, we’ll partner to complete one-time
									telemedicine, Website training, and clinical protocol education for the telehealth
									opportunities that interests you.
								</p>
							</div>
							<div className='dmeTextContainer'>
								<img src={icon4} className='dmeIcon' alt='' />
								<p>
									At Healthcare Telemed we have everything you need to grow your business. Our platform is{' '}
									<strong style={{ color: 'var(--pb)' }}>safe, efficient, and HIPAA compliant.</strong>
								</p>
							</div>
							<div className='dmeTextBoxWide'>
								<NavLink to='/contact'>
									<p className='button2'>Contact us today !!</p>
								</NavLink>
							</div>
							<p className='dmeTextBoxWide'>A representative will contact you to better service you.</p>
						</div>
						<div className='dmeImageBox'>
							<img alt='' />
						</div>
					</div>
					<div className='dmeContactContainer'>
						<ContactForm />
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default DmePhaLabBus;
