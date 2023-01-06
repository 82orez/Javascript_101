import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 720px;

  // * & 은 Container 컴포를 의미하는 것으로 사료됨.
  // * 따라서 아래의 의미는 Container 컴포의 모든 자식을 의미??
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function MainPage(props) {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/post-write');
  };
  const handlePostList = (item) => {
    navigate(`/post/${item.id}`);
  };

  return (
    <Wrapper>
      <Container>
        <Button title={'글 작성하기'} onClick={handleButton} />
        <PostList posts={data} onclickItem={handlePostList} />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
