import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

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
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log('[Person.js] inside render()');
    return (
      <Aux>
        <p onClick={this.props.click}>
          Demo text {this.props.name} {this.props.age}
        </p>
        <p>
          <input
            ref={inp => {
              this.inputElement = inp;
            }}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </p>
        {this.props.children}
      </Aux>
    );
    // return (
    //   <WithClass classes={classes.Person}>
    //     <p onClick={this.props.click}>
    //       Demo text {this.props.name} {this.props.age}
    //     </p>
    //     <p>
    //       <input
    //         type="text"
    //         onChange={this.props.changed}
    //         value={this.props.name}
    //       />
    //     </p>
    //     {this.props.children}
    //   </WithClass>
    // );
    // return [
    //   <div key="0">
    //     <p onClick={this.props.click}>
    //       Demo text {this.props.name} {this.props.age}
    //     </p>
    //     <p>{this.props.children}</p>
    //     <p>
    //       <input
    //         type="text"
    //         onChange={this.props.changed}
    //         value={this.props.name}
    //       />
    //     </p>
    //   </div>
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

//export default Person;
export default withClass(Person, classes.Person);
