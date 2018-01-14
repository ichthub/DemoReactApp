import React, { Component } from 'react';
import classes from './Person.css';
import Auxi from '../../../HOC/Auxi';
import withClass from '../../../HOC/withClass_2';

class Person extends Component{
	
	constructor (props) {
		super(props);
		console.log('[Person.js] inside constructor()',props);
}
	componentWillMount () {
		console.log('[Person.js] inside ComponentWillMount()');
	}
	
	componentDidMount () {
		console.log('[Person.js] inside ComponentDidMount()');
	}
	
	
	
	render(){
		console.log('[Person.js] inside render ()');
		
		return (
        <Auxi>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Auxi>
    )
	}
}

//changing Person.js from stateless ot stateful component
/*
const person = ( props ) => {
	
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};
*/

export default withClass(Person, classes.Person);