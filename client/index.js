import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';

// import HelloWorld from './components/HelloWorld';

import 'normalize.css';

render( 
	<BrowserRouter>
		<div>
			<Nav />
			<Route exact path='/' component={AboutMe}/>		
			<Route exact path='/projects' component={Projects}/>
			<Route exact path='/resume' component={Resume}/>
		</div>	
	</BrowserRouter>, 
	document.getElementById('root')
);


