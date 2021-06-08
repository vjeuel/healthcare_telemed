import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

function Contact() {
	return (
		<div>
			<Navbar />
			<div className='contactContainer'>
				<h3>Contact Form</h3>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
