import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Green].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['green']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = ['green', 'bold']
  }
  return (
    <Aux>
      <h1> {props.appTitle} </h1>
      <p className={assignedClasses.join(' ')}>It does work</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};
export default cockpit;
