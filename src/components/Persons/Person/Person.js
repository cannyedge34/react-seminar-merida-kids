import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }
  render() {
    console.log('[Person.js] inside render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Demo text {this.props.name} {this.props.age}
        </p>
        <p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </p>
        {this.props.children}
      </div>
    );
  }
}
export default Person;
