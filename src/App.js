import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import { Container } from 'react-bootstrap';

class App extends React.Component {

	render() {

		return (
			
			<>

				<NavigationBar />

				<Switch>

					<Route path = "/" exact component = {Home} />

					<Route path = "/about" component = {About} />

					<Route path = "/contact" component = {Contact} />

				</Switch>	

			</>

			

		)	
	}
}

export default App;
