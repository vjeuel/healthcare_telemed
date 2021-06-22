import React from 'react';
import Footer from '../components/Footer';
import './FirstEmail.css';
// ---------------------
import logoVertical from '../img/logo.svg';
import doctor from '../img/doctorComputerCropped.jpg';

function FirstEmail() {
	return (
		<div className='emailContainer'>
			<body>
				<section className='logo'>
					<img src={logoVertical} alt='logo' />
				</section>
				<h1>Healthcare Evolution</h1>
				<div>
					<h2>Telemedicine Visits</h2>
					<p>
						Securely and efficiently see patients via our integrated HIPAA-compliant telemedicine platform.
						Perfect for consults and post visits, telemedicine appointments with{' '}
						<strong style={{ color: '#10217D' }}>Healthcare Telemed</strong>, help providers see more patients in
						less time and increase revenue at your practice.
					</p>
				</div>
				<div className='photoTextBox'>
					<img src={doctor} className='photo1' alt='Doctor on computer' />
					<h2>Videoconferencing</h2>
					<p>
						The most commonly reimbursed form of telemedicine is videoconferencing. In order to qualify as “live
						video” across all states, real-time video and audio must be present, and the quality must be similar
						to that of an in-person encounter.
					</p>
				</div>
			</body>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default FirstEmail;
