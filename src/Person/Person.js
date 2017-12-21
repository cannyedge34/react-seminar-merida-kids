import React from 'react';
import Radium from 'radium';

const person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '380px'
    }
  };
  return (
    <div className="Person" style={style}>
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
export default Radium(person);
