'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

//config your firebase push
const config = {
	apiKey: '65be2bc844d4da68c4591da932bbee0f2e31c76e',
	authDomain: 'healthcare-telemed.firebaseapp.com',
	databaseURL: 'healthcare-telemed.firebaseio.com',
	projectId: 'healthcare-telemed',
	storageBucket: 'healthcare-telemed.appspot.com',
	messagingSenderId: '319227846283',
};

//create a functions to push
function firebasePush(input) {
	//prevents from braking
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}

	//push itself
	var mailsRef = firebase.database().ref('emails').push().set({
		mail: input.value,
	});
}

//push on form submit
if (form) {
	form.addEventListener('submit', function (evt) {
		evt.preventDefault();
		firebasePush(inputEmail);

		//shows alert if everything went well.
		return alert('Data Successfully Sent to Realtime Database');
	});
}
