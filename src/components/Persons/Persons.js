import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside constructor');
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE Persons.js] inside componentWillReceiveProps()',
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE Persons.js] inside shouldComponentUpdate()',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   //return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] inside componentWillUpdate()',
      nextProps,
      nextState
    );
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] inside render()');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          position={index}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
