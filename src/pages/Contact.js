import React from 'react';
//-------------------
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';
//-------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div>
			<div className='jumbotron'>
				<NavBar />
				<section className='contactContainer'>
					<div className='contactBox'>
						<h3>Contact Information</h3>
						<div className='contactGrid'>
							<a href='tel:18008235857' className='faIconCircle'>
								<FontAwesomeIcon icon={faPhoneAlt} className='faIcon' />
							</a>
							<a href='tel:18008235857' className='button1'>
								1 800-823-5857
							</a>
						</div>
						<div className='contactGrid'>
							<a href='mailto:management@healthcaretelemed.us' className='faIconCircle'>
								<FontAwesomeIcon icon={faEnvelopeOpenText} className='faIcon' />
							</a>
							<a href='mailto:contact@healthcaretelemed.us'>contact@healthcaretelemed.us </a>
						</div>
						<div className='contactGrid' style={{ marginBottom: '0', paddingBottom: '0' }}>
							<div className='faIconCircle' style={{ alignSelf: 'flex-start' }}>
								<FontAwesomeIcon icon={faHeadset} className='faIcon' />
							</div>
							<div>
								<h4>Customer Service</h4>
								<p>
									Do you have a question or need assistance with activation, scheduling a consult or for
									technical support?
								</p>
								<p>
									Please fill out the form and click send message. A representative will respond to your
									inquiry momentarily. We are continuously working to ensure quality service. Thank you for
									visiting to make contact with us today.
								</p>
							</div>
						</div>
					</div>
					<ContactForm />
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
