import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InsteadOfIf from './practices/InsteadOfIf';
import ClassComponentState from './practices/ClassComponentState';
import EventHandleColor from './practices/eventHandleColor';
import CheckboxExample from './practices/eventHandleCheckbox';
import EventHandlePractice from './practices/eventHandlePractice';
import EventHandleManyStates from './practices/eventHandleManyStates';
import MapSample from './practices/MapSample';
import MapSampleAdvanced from './practices/MapSampleAdvanced';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<InsteadOfIf />*/}
    {/*<ClassComponentState />*/}
    {/*<EventHandleColor />*/}
    {/*<CheckboxExample />*/}
    {/*<EventHandlePractice />*/}
    {/*<EventHandleManyStates />*/}
    {/*<MapSample />*/}
    <MapSampleAdvanced />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
