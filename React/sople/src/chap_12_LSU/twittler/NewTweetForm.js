import React, {useState} from 'react';

function NewTweetForm({ currentUser, onButtonClick }) {
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

export default NewTweetForm;