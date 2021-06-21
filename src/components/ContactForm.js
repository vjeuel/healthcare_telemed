import React, { useState } from 'react';
// import { firebase } from '../initFirebase';
import emailjs from 'emailjs-com';
//-------------------
import './ContactForm.css';

// const db = firebase.database();

function ContactForm() {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		businessType: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const [valid, setValid] = useState(false);

	const handleFirstNameInputChange = (event) => {
		setValues({ ...values, firstName: event.target.value });
	};

	const handleLastNameInputChange = (event) => {
		setValues({ ...values, lastName: event.target.value });
	};

	const handlePhoneInputChange = (event) => {
		setValues({ ...values, phone: event.target.value });
	};

	const handleEmailInputChange = (event) => {
		setValues({ ...values, email: event.target.value });
	};

	const handleBusinessTypeInputChange = (event) => {
		setValues({ ...values, businessType: event.target.value });
	};

	const handleMessageInputChange = (event) => {
		setValues({ ...values, message: event.target.value });
	};

	// Sending emails thru emailjs
	function sendEmail(event) {
		event.preventDefault();
		if (values.firstName && values.lastName && values.email && values.businessType && values.message) {
			setValid(true);
		}
		setSubmitted(true);
		emailjs.sendForm('service_xskellm', 'template_a7djgzv', event.target, 'user_Ok8ihHqm7lPdgKVBdzcVc').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	if (values.firstName && values.lastName && values.email && values.businessType && values.message) {
	// 		setValid(true);
	// 	}
	// 	setSubmitted(true);
	// 	const contactRef = db.ref('contacts');
	// 	const newContactRef = contactRef.push();
	// 	newContactRef.set({
	// 		firstName: values.firstName,
	// 		lastName: values.lastName,
	// 		phone: values.phone,
	// 		email: values.email,
	// 		businessType: values.businessType,
	// 		message: values.message,
	// 	});

	// 	db.ref('contacts').push(newContactRef.key);
	// };

	return (
		<div className='contactFormBox'>
			<h3>Contact Form</h3>
			{submitted && valid ? <div className='successMessage'>Success! Thank you for registering!</div> : null}
			<form className='contactForm' onSubmit={sendEmail}>
				<div className='formFieldBox'>
					<input
						value={values.firstName}
						onChange={handleFirstNameInputChange}
						id='firstName'
						className='formField'
						type='text'
						placeholder='First Name *'
						name='firstName'
					/>
					{submitted && !values.firstName ? (
						<span id='first-name-error' className='errorMessage'>
							Please enter a first name
						</span>
					) : null}
				</div>
				<div className='formFieldBox'>
					<input
						value={values.lastName}
						onChange={handleLastNameInputChange}
						id='lastName'
						className='formField'
						type='text'
						placeholder='Last Name *'
						name='lastName'
					/>
					{submitted && !values.lastName ? (
						<span id='last-name-error' className='errorMessage'>
							Please enter a last name
						</span>
					) : null}
				</div>
				<div className='formFieldBox'>
					<input
						value={values.phone}
						onChange={handlePhoneInputChange}
						id='phone'
						className='formField'
						type='text'
						placeholder='Phone number'
						name='phone'
					/>
					{submitted && !values.phone ? (
						<span id='last-name-error' className='errorMessage'>
							Please enter a phone number
						</span>
					) : null}
				</div>
				<div className='formFieldBox'>
					<input
						value={values.email}
						onChange={handleEmailInputChange}
						id='email'
						className='formField'
						type='text'
						placeholder='Email *'
						name='email'
					/>
					{submitted && !values.email ? (
						<span id='last-name-error' className='errorMessage'>
							Please enter an email
						</span>
					) : null}
				</div>
				<div className='formFieldBox'>
					<select
						value={values.businessType}
						onChange={handleBusinessTypeInputChange}
						id='businessType'
						className='formField'
						type='text'
						name='businessType'>
						<option value='businessType'>Choose one *</option>
						<option value='DME'>DME</option>
						<option value='Pharmacy'>Pharmacy</option>
						<option value='Lab'>Lab</option>
						<option value='Business'>Business</option>
						<option value='Provider'>Provider</option>
						<option value='Other'>Other</option>
					</select>
					{submitted && !values.businessType ? (
						<span id='last-name-error' className='errorMessage'>
							Choose the type of service
						</span>
					) : null}
				</div>
				<div className='formFieldBox'>
					<textarea
						value={values.message}
						onChange={handleMessageInputChange}
						id='message'
						className='formField formMessage'
						type='textarea'
						placeholder='Message *'
						name='message'
					/>
					{submitted && !values.message ? (
						<span id='last-name-error' className='errorMessage'>
							Please enter your message
						</span>
					) : null}
				</div>
				<button className='button3' type='submit'>
					send message
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
