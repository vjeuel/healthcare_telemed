import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Providers.css';
import ContactForm from '../components/ContactForm';
import icon1 from '../img/icon_1.svg';
import icon3 from '../img/icon_3.svg';

function DmePhaLabBus() {
	return (
		<div>
			<div className='jumbotron'>
				<Navbar />
				<section className='providers'>
					<div className='providersBox'>
						<div className='providersTextBox'>
							<div className='providersContainer'>
								<img src={icon1} className='providersIcon' alt='' />
								<h2>Telemedicine Visits</h2>
								<p>
									Securely and efficiently see patients via our integrated HIPAA-compliant telemedicine
									platform. Perfect for consults and post visits. Telemedicine appointments with Healthcare
									Telemed, help providers see more patients in less time and increase revenue at your practice.
								</p>
							</div>
							<div className='providersContainer'>
								<img src={icon3} className='providersIcon' alt='' />
								<h2>Video-conferencing</h2>
								<p>
									The most commonly reimbursed form of telemedicine is videoconferencing. In order to qualify
									as “live video” across all states, real-time video and audio must be present, and the quality
									must be similar to that of an in-person encounter.
								</p>
							</div>
							<div className='providersContainer providersContainerWide providersContainerHelp'>
								<h2>How we can help</h2>
								<div className='providersHelpBox'>
									<p>
										Once you’ve completed the application process, we’ll partner to complete one-time
										telemedicine , Website training, and clinical protocol education for the telehealth
										opportunities that interest you.
									</p>

									<p>
										Based on your interests and experience, we'll start matching you with remote care
										opportunities with a variety of partners — providing everything from lab requisitions and
										reviews, remote patient monitoring, and virtual diagnosis and treatment.
									</p>

									<p>
										Start providing care on your terms — work anywhere, anytime, on your schedule. With the
										best telehealth opportunities available nationwide, you’re in the driver’s seat.
									</p>
								</div>
							</div>
							<p className='providersContainerWide'>
								Grow your client base with our network of  businesses that will continually provide you with new
								clientele.
							</p>
							<div className='button2 providersContainerWide'>
								<NavLink to='/contact'>
									<p className='providersHighlight '>
										We provide access to the software platform for{' '}
										<strong style={{ fontSize: '2rem' }}>FREE</strong> to Providers !!!
									</p>
								</NavLink>
							</div>
						</div>
						<div className='providersImageBox'>
							<img alt='' />
						</div>
					</div>
					<div className='providersContactContainer'>
						<ContactForm />
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default DmePhaLabBus;
