import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

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
  
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <TextInput height={20} value={title} onchange={handleTitle} />
        <TextInput height={480} value={content} onchange={handleContent} />

        <Button title={'글 작성하기'} onClick={() => navigate('/')} />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;