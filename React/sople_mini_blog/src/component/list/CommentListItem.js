import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;
const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;
function CommentListItem({ comment }) {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;