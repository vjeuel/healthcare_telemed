import React from 'react';
//-------------------
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../ContactForm';
import './Contact.css';

function Contact() {
	return (
		<div>
			<NavBar />
			<section className='contactContainer'>
				<ContactForm />
			</section>
			<Footer />
		</div>
	);
}

export default Contact;
