import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 18,
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 18,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>fixed number: {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              {number: number + 1, fixedNumber: fixedNumber - 2}
            ,() => {
                return console.log('States 가 호출됨!!')
              })
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1,
              }
            });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
