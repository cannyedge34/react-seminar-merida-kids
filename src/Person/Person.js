import React from 'react';

const person = props => {
  return (
    <div className="Person">
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
