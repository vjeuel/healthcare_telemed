import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

function Contact() {
	return (
		<div>
			<Navbar />
			<section className='contactContainer'>
				<div className='contactBox'>
					<h3>Contact Form</h3>
					<div class='success-message'>Success! Thank you for registering</div>
					<form class='contactForm'>
						<div className='formFieldBox'>
							<input
								id='firstName'
								className='formField'
								type='text'
								placeholder='First Name'
								name='firstName'
							/>
							<span id='first-name-error'>Please enter a first name</span>
						</div>
						<div className='formFieldBox'>
							<input id='lastName' className='formField' type='text' placeholder='Last Name' name='lastName' />
							<span id='last-name-error'>Please enter a last name</span>
						</div>
						<div className='formFieldBox'>
							<input id='phone' className='formField' type='text' placeholder='Phone number' name='phone' />
							<span id='last-name-error'>Please enter a phone number</span>
						</div>
						<div className='formFieldBox'>
							<input id='email' className='formField' type='text' placeholder='Email' name='email' />
							<span id='last-name-error'>Please enter an email</span>
						</div>
						<div className='formFieldBox'>
							<input id='message' className='formField' type='text' name='service' />
							<span id='last-name-error'>Choose the type of service</span>
						</div>
						<div className='formFieldBox'>
							<textarea
								id='email'
								className='formField formMessage'
								type='textarea'
								placeholder='Message'
								name='message'
							/>
							<span id='last-name-error'>Please enter your message</span>
						</div>
						<button className='form-field' type='submit'>
							Register
						</button>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Contact;
