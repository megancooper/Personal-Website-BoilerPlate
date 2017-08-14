import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			aboutMe: true,
			projects: null,
			resume: null
		}
	}

	// State values that help with page changes

	changeAboutMe(aboutMe){
		this.setState( { aboutMe } );
	}

	changeProjects(projects){
		this.setState( { projects } );
	}

	changeResume(resume){
		this.setState( { resume } );
	}

	Page(){
		return (
			if (this.state.aboutMe) {
				<AboutMe 
					changeAboutMe  = {this.changeAboutMe.bind(this)}
					changeProjects = {this.changeProjects.bind(this)}
					changeResume   = {this.changeResume.bind(this)}/>
			}
			else if (this.state.projects) {

			}
			else if (this.state.resume) {

			}

			/* This Code is From the Boilerpate
			this.state.user 
			? <Home user={this.state.user} /> 
			: <Login changeUser={this.changeUser.bind(this)} />

			*/
		);
	}

	render() {
		return (
			<div>
				{ this.Page() }
			</div>
		);
	}
} 
