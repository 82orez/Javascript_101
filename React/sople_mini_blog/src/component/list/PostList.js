import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostList({ posts, onclickItem }) {
  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <PostListItem key={post.id} post={post} onclick={() => onclickItem(post)} />
        );
      })}
    </Wrapper>
  );
}

export default PostList;