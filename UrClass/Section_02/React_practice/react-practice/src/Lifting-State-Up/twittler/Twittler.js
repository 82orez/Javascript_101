import React, { useState } from 'react';
import './styles.css';

const currentUser = 'TG';

function Twittler() {
  const [tweets, setTweets] = useState([
    {
      uuid: 1,
      writer: '김코딩',
      date: '2020-10-10',
      content: '안녕 리액트',
    },
    {
      uuid: 2,
      writer: '박해커',
      date: '2020-10-12',
      content: '좋아 코드스테이츠!',
    },
  ]);

  // * 이 상태 변경 함수가 NewTweetForm 에 의해 실행되어야 합니다.
  const addNewTweet = (newTweet) => {
    // ? 전개연산자를 이용하면 기존 데이터를 변경하지 않아 불변성이 유지됨.
    setTweets([...tweets, newTweet]);
    // const newTweetForm = [...tweets, newTweet];
    // setTweets(newTweetForm);
  };

  return (
    <div>
      <div>작성자: {currentUser}</div>
      {/** 자식 컴포에 props 형태로 함수를 전달 **/}
      <NewTweetForm onButtonClick={addNewTweet} />
      <ul id="tweets">
        {tweets.map((t) => (
          <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
            {t.content}
          </SingleTweet>
        ))}
      </ul>
    </div>
  );
}

function NewTweetForm({ onButtonClick }) {
  const [newTweetContent, setNewTweetContent] = useState('');

  const onTextChange = (e) => {
    setNewTweetContent(e.target.value);
  };

  const onClickSubmit = () => {
    if (newTweetContent) {
      let newTweet = {
        uuid: Math.floor(Math.random() * 10000),
        writer: currentUser,
        date: new Date().toISOString().substring(0, 10),
        content: newTweetContent,
      };

      // TODO: 여기서 newTweet 이 addNewTweet 에 전달되어야 합니다.
      // * 사실상 부모 컴포의 addNewTweet 함수가 실행됨.
      // * 따라서 인자에 newTweet 를 추가.
      onButtonClick(newTweet);
    }
  };

  return (
    <div id="writing-area">
      <textarea id="new-tweet-content" onChange={onTextChange}></textarea>
      <button id="submit-new-tweet" onClick={onClickSubmit}>
        새 글 쓰기
      </button>
    </div>
  );
}

function SingleTweet({ writer, date, children }) {
  return (
    <li className="tweet">
      <div className="writer">{writer}</div>
      <div className="date">{date}</div>
      <div>{children}</div>
    </li>
  );
}

export default Twittler;
