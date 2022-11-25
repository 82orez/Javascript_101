import logo from './logo.svg';
import './App.css';

function App() {
    const proverbs = ['좌절감으로 스로운 기회를 놓치지 마라.',1,2,3,4];
    const getRandomIndex = function(length) {
        return parseInt(Math.random() * length);
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>을 고치고 저장하면 새로운 명연을 불 수 있습니다.
        </p>
          {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
