import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
	
	constructor (props) {
		super(props);
		console.log('[Persons.js] inside constructor()',props);
}
	/*----------------------------------lifecycle explained--------------------------------*/
	componentWillMount () {
		console.log('[Persons.js] inside ComponentWillMount()');
	}
	
	componentDidMount () {
		console.log('[Persons.js] inside ComponentDidMount()');
	}
	//Lifecycle: trigger update by parent
	
	componentWillReceiveProps ( nextProps ){
		console.log("[UPDATE Persons.js] Inside componentWillReceiveProps", nextProps);
	}
	//this is done by imorting PureComponent
	/*shouldComponentUpdate ( nextProps, nextState ){
		console.log("[UPDATE Persons.js] Inside shouldComponentUpdate", nextProps, nextState);
		return nextProps.persons !== this.props.persons || 
			nextProps.click !== this.props.click || 
			nextProps.chnaged !== this.props.changed;
		
	}*/
	
	componentWillUpdate ( nextProps, nextState ){
		console.log("[UPDATE Persons.js] Inside componentWillUpdate", nextProps, nextState);
	}
	
	componentDidUpdate (){
		console.log("[UPDATE Persons.js] Inside componentDidUpdate");
	}
	/*----------------------------------------------------------------------------------------*/
	
	render(){
		console.log('[Persons.js] inside render ()');
		
		return this.props.persons.map ((person, index) => {
            return <Person
				position = {index}
				click={() => this.props.clicked(index)}
				name={person.name} 
				age={person.age}
				key={person.id}
				changed={(event) => this.props.changed(event, person.id)} />
          });
	}
}
export default Persons;