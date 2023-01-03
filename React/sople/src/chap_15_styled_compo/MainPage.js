import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

// * styled-component 의 기본 사용법.
const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

// * props 를 활용한 styled-component 의 사용법.
const Button1 = styled.button`
  color: ${(props) => (props.dark ? 'white' : 'dark')};
  background: ${(props) => (props.dark ? 'black' : 'white')};
  border: 1px solid black;
`;

const Button2 = styled.button`
  background: ${props => props.color ? props.color : 'white'};
`;

const Button3 = styled.button`
  background: ${props => props.color || 'white'};
`;

// * styled-component 의 확장.
const RoundButton = styled(Button1)`
  border-radius: 10px;
`;

function MainPage() {
  return (
    <Wrapper>
      {/** Global(전역) 설정 **/}
      <GlobalStyle />

      <Title>Hello, React!</Title>

      <Button1>Normal</Button1>
      <Button1 dark>Dark</Button1>
      <br/>

      <RoundButton>Rounded Button</RoundButton>
      <RoundButton dark>Rounded Button Dark</RoundButton>
      <br/>

      <Button2>Button2</Button2>
      <Button2 color={'orange'}>Button2</Button2>
      <br/>

      <Button3>Button3</Button3>
      <Button3 color={'pink'}>Button3</Button3>
    </Wrapper>
  );
}

export default MainPage;
