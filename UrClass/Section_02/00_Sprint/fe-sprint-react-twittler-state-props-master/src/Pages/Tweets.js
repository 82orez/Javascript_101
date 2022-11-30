// TODO : useState 를 react 로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState 를 적절히 활용하세요.

  // const getRandomNumber = (min, max) => {
  //   return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  // };
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [data, setData] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    if (name && msg) {
      const getRandomNumber = (min, max) => {
        return parseInt(Math.random() * (Number(max) - Number(min) + 2));
      };

      const tweet = {
        id: data.length + 1,
        username: name,
        picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
          1,
          98
        )}.jpg`,
        content: msg,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toDateString(),
      };

      const newData = [tweet, ...data];
      setData(newData);

      setName('');
      setMsg('');
      document.querySelector('.tweetForm__input--username').value = '';
      document.querySelector('.tweetForm__input--message').value = '';
    }
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  // defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                {/*TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요.*/}
                <textarea className={'tweetForm__input--message'}
                          placeholder={'messages here..'} onChange={handleChangeMsg}></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter 를 작성하세요. */}
                  {'total: ' + dummyTweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon">
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
                <button className={"tweetForm__submitButton"} onClick={handleButtonClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {data.map((tweet) => {
          return (
            <li className="tweet" key={tweet.id}>
              <div className="tweet__profile">
                <img src={tweet.picture} />
              </div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className="tweet__username">{tweet.username}</span>
                  <span className="tweet__createdAt">{tweet.createdAt}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
              </div>
            </li>
          )
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
