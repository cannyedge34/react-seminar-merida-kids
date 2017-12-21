import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 24 },
      { id: '2', name: 'John', age: 26 },
      { id: '3', name: 'Albert', age: 42 }
    ],
    otherState: 'other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alternative to modern approach
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inhet',
      border: '1px solid red',
      padding: '6px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'coral',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('green'); //classes = ['green']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['green', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi there!</h1>
          <p className={classes.join(' ')}>It does work</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
