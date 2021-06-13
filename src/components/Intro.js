import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './Intro.css';
import ContactForm from './ContactForm';

function Intro() {
	return (
		<div>
			<NavBar />
			<div className='introContainer'>
				<img className='introImage' alt='' />
				<div className='introBox'>
					<h1>Healthcare Evolution</h1>
					<h3>
						The healthcare industry is undergoing a digital evolution – with video communication playing a vital
						role. Discover why a high-quality, easy-to-use video conferencing solution is essential for
						telehealth.
					</h3>
					<h3>We are HIPAA-compliant telemedicine. </h3>
				</div>
			</div>
			<div className='about'>
				<div className='aboutBox'>
					<div className='aboutImageBox'>
						<img className='aboutImage' alt='' />
					</div>
					<div className='aboutTextBox'>
						<h2>About</h2>
						<p className='aboutTextBoxLine'>
							Learn how healthcare providers are using the latest video calling software to{' '}
							<strong style={{ color: 'var(--pb)' }}>make telehealth a reality</strong> and improve the quality,
							equity, and affordability of healthcare worldwide. With skyrocketing costs, regulatory changes, and
							evolving technology creating new challenges and opportunities for healthcare, there’s no better
							time to explore how video communication can{' '}
							<strong style={{ color: 'var(--pb)' }}>improve patient care and provider efficiency</strong>, while
							simultaneously reducing costs.
						</p>
						<p className='aboutTextBoxLine'>
							In addition to reducing overhead costs per visit, telehealth is{' '}
							<strong style={{ color: 'var(--pb)' }}>
								less time-consuming, both for the patient and provider
							</strong>
							. Telehealth can allow physicians to bill for uncompensated phone calls while also extending hours
							to capture more billable time. Telehealth{' '}
							<strong style={{ color: 'var(--pb)' }}>
								cuts down on no-shows and can improve the efficiency of a practice
							</strong>
							. Telehealth can also provide a competitive advantage, attracting and retaining more patients with
							new models of care.
						</p>
						<p className='aboutTextBoxLine'>
							With a telehealth visit, the doctor comes to the patient on their phone, laptop, or another digital
							device.
						</p>
						<p>
							We are a <strong style={{ color: 'var(--pb)' }}>HIPAA-compliant</strong> telemedicine software.
						</p>
					</div>
				</div>
			</div>
			<section className='introContactContainer'>
				<ContactForm />
			</section>
			<Footer />
		</div>
	);
}

export default Intro;
