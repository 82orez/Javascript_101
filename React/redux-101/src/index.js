import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ! Redux 를 사용하기 위해서는 redux 와 react-redux 를 설치해야합니다.
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

// ! Action Creator 함수 생성.
export const increase = () => {
  return {
    type: 'INCREASE'
  }
}
export const decrease = () => {
  return {
    type: 'DECREASE'
  }
}
// export const setNumber = (num) => {
//   return {
//     type: 'SET_NUMBER',
//     payload: num
//   }

// ! reducer 함수 및 초기값 설정.
const count = 1

// * Reducer 를 생성할 때에는 초기 상태를 first 인자로 요구합니다.
// * Reducer 를 생성할 때에는 action 객체를 second 인자로 요구합니다.
const counterReducer = (state = count, action) => {

  // * Action 객체의 type 값에 따라 분기하는 switch 조건문입니다.
  switch (action.type) {
    // * action.type === 'INCREASE' 일 경우
    case 'INCREASE':
      return state + 1

    // * action.type === 'DECREASE' 일 경우
    case 'DECREASE':
      return state - 1

    // * action.type === 'SET_NUMBER' 일 경우
    case 'SET_NUMBER':
      return action.payload

    // * 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
}

// ! store 설정.
const store = createStore(counterReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ! 사용할 컴포를 Provider 로 감싸기.
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();