import React, { Component } from 'react';
import style from './styles/AboutMeStyle.css';


export default class AboutMe extends Component{
	render(){
		return (
			<div>

					<img src="images/ProfilePic.jpg" align="middle"/>

				<h1 align="center">Who Am I?</h1>
				<p>Currently a student at UT Austin, I enjoy programming and 
					having fun. As a second-year Electrical and Computer Engineering 
					student and the University of Texas at Austin, I have already 
					had hands on experience with C, C++, and Assembly—as well as 
					Embedded Systems development using microcontrollers and minimally
					 intrusive debugging techniques. 

					I recently got into web development, and I think 
					I'm in love. I built this website using a MERN stack, and am 
					currently working on some other web applications.
					When I'm not thinking of new websites to create 
					I spend time running or reading. Also, I'm a fan of crazy socks! 
				<a href="/projects"> Check out some of the projects I've worked on.</a></p>
			</div>
		);
	}
}