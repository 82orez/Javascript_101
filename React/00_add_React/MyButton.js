'use strict';

// * 연결 공식.
const e = React.createElement;

function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return e (
    'button',
    {onClick: () => {setIsClicked(!isClicked)}},
    isClicked ? 'Clicked!' : 'Click here!'
  );
}


// * 연결 공식.
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(MyButton));