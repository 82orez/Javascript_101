import React, { useState } from 'react';
import NewTweetForm from './NewTweetForm';
import SingleTweet from './SingleTweet';
import './styles.css';

function Twittler() {
  const [currentUser, setCurrentUser] = useState('TG');
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

  const handleChangeUser = (e) => {
    setCurrentUser(e.target.value);
  }

  // * 이 상태 변경 함수가 NewTweetForm 에 의해 실행되어야 합니다.
  const addNewTweet = (newTweet) => {
    // ? 전개연산자를 이용하면 기존 데이터를 변경하지 않아 불변성이 유지됨.
    setTweets([...tweets, newTweet]);
    // const newTweetForm = [...tweets, newTweet];
    // setTweets(newTweetForm);
  };

  return (
    <div>
      <label>
        작성자:
        <input type={'text'} value={currentUser} onChange={handleChangeUser}/>
      </label>

      {/** 자식 컴포에 props 형태로 함수를 전달 **/}
      <NewTweetForm currentUser={currentUser} onButtonClick={addNewTweet} />
      <ul id="tweets">
        {tweets.map((t) => (
          <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
            {/** 다음 라인은 SingleTweet 컴포의 속성에 children 으로 들어감. **/}
            {t.content}
          </SingleTweet>
        ))}
      </ul>
    </div>
  );
}

export default Twittler;
