import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        <div>Hello! My name is {name}!</div>
        <div>Hello! My age is {age}!</div>
        <br />
        <div>children value is {children}</div>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'TG',
  age: 46,
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyComponent;
