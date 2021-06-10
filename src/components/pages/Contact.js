import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

function Contact() {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		businessType: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

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

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<div>
			<Navbar />
			<section className='contactContainer'>
				<div className='contactBox'>
					<h3>Contact Form</h3>
					{submitted ? <div class='successMessage'>Success! Thank you for registering!</div> : null}
					<form class='contactForm' onSubmit={handleSubmit} action='vjeuel@gmail.com'>
						<div className='formFieldBox'>
							<input
								value={values.firstName}
								onChange={handleFirstNameInputChange}
								id='firstName'
								className='formField'
								type='text'
								placeholder='First Name'
								name='firstName'
							/>
							{submitted && !values.firstName ? (
								<span id='first-name-error'>Please enter a first name</span>
							) : null}
						</div>
						<div className='formFieldBox'>
							<input
								value={values.lastName}
								onChange={handleLastNameInputChange}
								id='lastName'
								className='formField'
								type='text'
								placeholder='Last Name'
								name='lastName'
							/>
							{submitted && !values.lastName ? <span id='last-name-error'>Please enter a last name</span> : null}
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
							{submitted && !values.phone ? <span id='last-name-error'>Please enter a phone number</span> : null}
						</div>
						<div className='formFieldBox'>
							<input
								value={values.email}
								onChange={handleEmailInputChange}
								id='email'
								className='formField'
								type='text'
								placeholder='Email'
								name='email'
							/>
							{submitted && !values.email ? <span id='last-name-error'>Please enter an email</span> : null}
						</div>
						<div className='formFieldBox'>
							<select
								value={values.businessType}
								onChange={handleBusinessTypeInputChange}
								id='select'
								className='formField'
								type='text'
								name='service'>
								<option value='DME'>DME</option>
								<option value='pharmacies'>Pharmacy</option>
								<option value='labs'>Lab</option>
								<option value='business'>Business</option>
								<option value='provider'>Provider</option>
								<option value='other'>Other</option>
							</select>
							{submitted && !values.businessType ? (
								<span id='last-name-error'>Choose the type of service</span>
							) : null}
						</div>
						<div className='formFieldBox'>
							<textarea
								value={values.message}
								onChange={handleMessageInputChange}
								id='message'
								className='formField formMessage'
								type='textarea'
								placeholder='Message'
								name='message'
							/>
							{submitted && !values.message ? <span id='last-name-error'>Please enter your message</span> : null}
						</div>
						<button className='button' type='submit'>
							submit
						</button>
					</form>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Contact;
