import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log('Rendering new state completed!');
    console.log({
      name,
      nickName,
    });

    // ! useEffect 함수에서 return 하는 함수는 컴포가 unmount 될 때 실행됨.
    return () => {
      console.log('Unmount previous state!');
      console.log({
        name,
        nickName,
      });
    };
  }, [name, nickName]);    // * 의존성 배열 조건에 따라 다른 결과물이 실행됨.

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} placeholder={'Name'} onChange={onChange} />
        <input name="nickname" value={nickName} placeholder={'Nick name'} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
