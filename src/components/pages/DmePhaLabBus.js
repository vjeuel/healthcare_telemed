import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../pages/DmePhaLabBus.css';
import ContactForm from '../ContactForm';

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
							<p className='dmeTextBoxLine'>
								Once you’ve completed the application process, we’ll partner to complete one-time telemedicine,
								Website training, and clinical protocol education for the telehealth opportunities that
								interests you.
							</p>
							<p className='dmeTextBoxLine'>
								At Healthcare Telemed we have everything you need to grow your business. Our platform is{' '}
								<strong style={{ color: 'var(--pb)' }}>safe, efficient, and HIPAA compliant.</strong>
							</p>
							<div style={{ width: '75%', margin: '2rem auto' }}>
								<NavLink to='/contact'>
									<p className='button2'>Contact us today !!</p>
								</NavLink>
							</div>
							<p>A representative will contact you to better service you.</p>
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
