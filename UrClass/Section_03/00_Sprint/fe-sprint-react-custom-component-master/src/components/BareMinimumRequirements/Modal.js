import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  // TODO : Modal 을 구현하는데 전체적으로 필요한 CSS 를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal 이 떴을 때의 배경을 깔아주는 CSS 를 구현합니다.
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalBtn = styled.button`
  //transform: rotate(0.5turn);
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
}))`
  // TODO : Modal 창 CSS 를 구현합니다.
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > button {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 1.2rem;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen 의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
          // TODO : 클릭하면 Modal 이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        >
          Open Modal
          {/* TODO : 조건부 렌더링을 활용해서 Modal 이 열린 상태(isOpen 이 true 인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Opened!' 로 Modal 이 닫힌 상태(isOpen 이 false 인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal' 이 되도록 구현해야 합니다. */}
        </ModalBtn>
        {/* TODO : 조건부 렌더링을 활용해서 Modal 이 열린 상태(isOpen 이 true 인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(event) => { event.stopPropagation() } }>
              <button onClick={openModalHandler}>X</button>
              <div>Hello 42s</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
