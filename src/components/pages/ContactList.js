import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactListData from '../pages/contactList.json';
import '../pages/ContactList.css';

function ContactList() {
	return (
		<div>
			<Navbar />
			<div className='.listContainer'>
				<h1>Contact List</h1>
				{ContactListData.map((contactsDetail, index) => {
					return (
						<div>
							<p>{contactsDetail.firstName}</p>
							<p>{contactsDetail.lastName}</p>
							<p>{contactsDetail.email}</p>
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}

export default ContactList;
