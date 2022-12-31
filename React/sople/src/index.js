import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import commentList from './chap_05/CommentList';

import Library from './chap_03/Library';
import CommentList from './chap_05/CommentList';
import NotificationList from './chap_06_Life_cycle_class/NotificationList';
import Counter from './chap_07_Hooks/01_usestate/01_useState';
import useEffectCounter from './chap_07_Hooks/02_useEffect/02_1_useEffect';
import UseEffectCounter from './chap_07_Hooks/02_useEffect/02_1_useEffect';
import UseEffectUM from './chap_07_Hooks/02_useEffect/02_3_UseEffectUM';
import TextInputWithFocusButton from './chap_07_Hooks/03_useRef/03_1_useRef_focus';
import MediaPlay from './chap_07_Hooks/03_useRef/03_2_useRef_Media';
import Accommodate from './chap_07_Hooks/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   <Library />
  //   <CommentList />
  //   <NotificationList />
  //   <Counter />
  //   <UseEffectCounter />
  //   <UseEffectUM />
  // <TextInputWithFocusButton />
  // <MediaPlay />
  <Accommodate />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
