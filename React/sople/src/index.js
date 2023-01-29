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
import Toggle from './chap_08_event/Toggle';
import ConfirmButton from './chap_08_event/ConfirmButton';
import LandingPage from './chap_09_if/LandingPage';
import NumberList from './chap_10_list/NumberList';
// const numbers = [1, 2, 3, 4, 5];
import AttendanceBook from './chap_10_list/AttendanceBook';
import NameForm from './chap_11_form/NameForm';
import FruitSelect from './chap_11_form/FruitSelect';
import SignUp from './chap_11_form/SignUp';
import Converter from './chap_12_LSU/Converter/Converter';
import Twittler from './chap_12_LSU/twittler/Twittler';
import ProfileCard from './chap_13_Card/ProfileCard';
import SimpleRouter from './chap_14_Router/SimpleRouter';
import CheckboxExample from './chap_08_event/CheckboxExample';
import ManyStates from './chap_07_Hooks/01_usestate/ManyStates';
import MainPage from './chap_15_styled_compo/MainPage';
import Blocks from './chap_15_styled_compo/Blocks';
import PropsDrilling from './chap_16_Redux/PropsDrilling';
import Presentation from './chap_16_Redux/Presentation';

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
  // <Accommodate />
  // <Toggle />
  // <ConfirmButton />
  // <LandingPage />
  // <NumberList numbers={numbers} />
  // <AttendanceBook />
  // <NameForm />
  // <FruitSelect />
  // <SignUp />
  // <Converter />
  // <Twittler />
  // <ProfileCard />
  <SimpleRouter />
  // <CheckboxExample />
  // <ManyStates />
  // <MainPage />
  // <Blocks />
  // <PropsDrilling />
  // <Presentation />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
