import React from 'react';
import './style.css';

// ! react-redux 에서 useDispatch, useSelector 를 불러와주세요.
import {useDispatch, useSelector} from 'react-redux';

// ! Action Creator 함수 increase, decrease 를 불러와주세요.
import { increase,decrease } from './index.js';

export default function App() {
  const dispatch = useDispatch();

  // ! useSelector 의 콜백 함수의 인자에 Store 에 저장된 모든 state 가 담깁니다.
  // ! 그대로 return 을 하게 되면 Store 에 저장된 모든 state 를 사용할 수 있습니다.
  const state = useSelector((state) => (state))

  // * Store 에 저장된 기존 state 값인 1이 찍히는 것을 확인할 수 있습니다.
  console.log(state)

  const plusNum = () => {
    dispatch(increase());
  };
  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className={'container'}>
      {/** state 가져오기 **/}
      <h1>{`Count: ${state}`}</h1>
      <div>
        <button className={'plusBtn'} onClick={plusNum}>+</button>
        <button className={'minusBtn'} onClick={minusNum}>-</button>
      </div>
    </div>
  );
}