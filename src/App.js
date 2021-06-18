import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Intro from './components/Intro';
// --------
import Contact from './components/pages/Contact';
import ApplyNow from './components/pages/ApplyNow';
import DmePhaLabBus from './components/pages/DmePhaLabBus.js';
import Providers from './components/pages/Providers';
import FirstEmail from './email/FirstEmail';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/' exact component={withRouter(Intro)} />
					<Route path='/contact' component={withRouter(Contact)} />
					<Route path='/applyNow' component={withRouter(ApplyNow)} />
					<Route path='/dmePhaLabBus' component={withRouter(DmePhaLabBus)} />
					<Route path='/providers' component={withRouter(Providers)} />
					<Route path='/firstEmail' component={withRouter(FirstEmail)} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
