import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../pages/Providers.css';
import ContactForm from '../ContactForm';

function DmePhaLabBus() {
	return (
		<div>
			<div className='jumbotron'>
				<Navbar />
				<section className='providers'>
					<div className='providersBox'>
						<div className='providersTextBox'>
							<h2>Telemedicine Visits</h2>
							<p className='providersTextBoxLine'>
								Securely and efficiently see patients via our integrated HIPAA-compliant telemedicine platform.
								Perfect  for consults and post visits, telemedicine appointments with Healthcare Telemed , help
								providers see more patients in less time and increase revenue at your practice.
							</p>
							<h2>Videoconferencing</h2>
							<p className='providersTextBoxLine'>
								The most commonly reimbursed form of telemedicine is videoconferencing. In order to qualify as
								“live video” across all states, real-time video and audio must be present, and the quality must
								be similar to that of an in-person encounter.
							</p>
							<h2>How we can help</h2>
							<p>
								Once you’ve completed the application process, we’ll partner to complete one-time telemedicine ,
								Website training, and clinical protocol education for the telehealth opportunities that interest
								you.
							</p>
							<p>
								Based on your interests and experience, we'll start matching you with remote care opportunities
								with a variety of partners — providing everything from lab requisitions and reviews, remote
								patient monitoring, and virtual diagnosis and treatment.
							</p>
							<p className='providersTextBoxLine'>
								Start providing care on your terms — work anywhere, anytime, on your schedule. With the best
								telehealth opportunities available nationwide, you’re in the driver’s seat.
							</p>
							<p className='providersTextBoxLine'>
								Grow your client base with our network of  businesses that will continually provide you with new
								clientele.
							</p>
							<p>We provide access to the software platform for free to Providers !!! </p>
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
