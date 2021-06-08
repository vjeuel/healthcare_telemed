import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Intro></Intro>

			<Footer></Footer>
		</div>
	);
}

export default App;
