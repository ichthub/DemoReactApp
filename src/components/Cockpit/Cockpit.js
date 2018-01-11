import React from 'react';
import classes from './Cockpit.css';
import Auxi from '../../HOC/Auxi';

const cockpit = (props) =>{
		
	const assignedClasses =[];
	let btnClasses = classes.Button;
	if(props.showPersons){
		btnClasses = [classes.Button , classes.Red].join(' ');
	}
	if (props.persons.length <= 2){
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1){
		assignedClasses.push(classes.bold);
	}
	
	
	
	return(
		<Auxi>
			<h1>{ props.appTitle }</h1>
			<p className = {assignedClasses.join(' ')}>This is really working!</p>
			<button
				className = {btnClasses}
				onClick={props.clicked}>Toggle Persons</button>
		</Auxi>
	
	);
	
};

export default cockpit;