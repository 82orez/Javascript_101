import React, { Component } from 'react';

class ClassComponentState extends Component {
  // * class component 에서 state 설정 Method 1.
  // * class component 에서 state 의 형택는 객체여야 함.
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 18,
  //   };
  // }

  // * class component 에서 state 설정 Method 2.
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

export default ClassComponentState;