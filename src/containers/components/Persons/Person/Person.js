import React from 'react';

import classes from './Person.css';

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Demo text {props.name} {props.age}
      </p>
      <p>
        <input type="text" onChange={props.changed} value={props.name} />
      </p>
      {props.children}
    </div>
  );
};
export default person;
