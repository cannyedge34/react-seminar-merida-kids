import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 24 },
      { name: 'John', age: 26 },
      { name: 'Albert', age: 42 }
    ]
  };

  switchNameHandler = newName => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Albert';
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'John', age: 26 },
        { name: 'Albert', age: 42 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 24 },
        { name: event.target.value, age: 26 },
        { name: 'Albert', age: 48 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <button onClick={() => this.switchNameHandler('Peter!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'John!')}
          changed={this.nameChangedHandler}
        >
          My favorite Serie: The Jinx
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </Person>
      </div>
    );
  }
}

export default App;
