import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Max', age: 24 }, { name: 'John', age: 26 }]
  };

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Albert';
    this.setState({
      persons: [{ name: 'Andrew', age: 24 }, { name: 'Mathew', age: 52 }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My favorite Serie: The Jinx
        </Person>
      </div>
    );
  }
}

export default App;
