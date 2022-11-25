import React from 'react';
import './App.css';
import './global-style.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets); // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
        <i className = "far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
            {`total: ${dummyTweets.length}`}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <img id="logo" src={`${process.env.PUBLIC_URL}/codestates-logo.png`} />
      <footer>Copyright @ 2022 Code States</footer>
    </div>
  );
};

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                  {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                  {tweet.username === 'parkhacker' ? <span className= 'tweet__username tweet__username--purple'>{tweet.username}</span>
                          : <span className= 'tweet__username'>{tweet.username}</span>}
                {/*<span className= 'tweet__username'>{tweet.username}</span>*/}
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
                <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      {/*TODO : Footer 컴포넌트를 작성합니다. -> completed */}
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        {/*TODO : Sidebar 컴포넌트를 작성합니다.*/}
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
