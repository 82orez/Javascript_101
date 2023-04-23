const title = document.querySelector('#title');
const author = document.querySelector('#author');
const saveBttn = document.querySelector('#save');
const bookList = document.querySelector('#bookList');

//============================= 추가 과정 ===================================//
saveBttn.addEventListener('click', (e) => {
  // save 버튼 클릭시 서버 전송 기능 및 새로 고침 금지.
  e.preventDefault();

  // * li 요소 생성.
  const item = document.createElement('li');
  // * li 요소에 텍스트 추가. (textContent 또는 innerText)
  item.textContent = `${title.value} - ${author.value}`;

  // * span 요소 생성.
  const itemSpan = document.createElement('span');
  // * span 요소에 텍스트 추가.
  itemSpan.innerText = 'Del';
  // * span 요소에 클래스 delButton 추가.
  // 아래 두 가지 방법 다 가능.
  // itemSpan.classList.add('delButton');
  itemSpan.className = 'delButton';

  // * li 요소에 span 요소를 마지막 자식으로 붙여 넣음.
  item.appendChild(itemSpan);


  // ! bookList 영역에 기존 책 목록이 있으면,
  // bookList 의 자식으로 가장 상단에 새로 추가 입력하고,
  const isBookList = document.querySelectorAll('#bookList > li');
  if (isBookList.length !== 0) {
    bookList.insertBefore(item, isBookList[0]);
  } else {
    // ! 없으면 bookList 요소에 li 요소를 자식으로 붙여 넣음.
    bookList.appendChild(item);
  }

  // 입력 value 초기화.
  title.value = '';
  author.value = '';

//============================= 삭제 과정 ===================================//

  // ! save 버튼을 click 한 다음에 del 버튼이 생기므로 save 버튼 click 이벤트 리스너 안에 작성.
  // * 클래스 delButton 의 모든 요소들을 배열 형태로 만듬.
  const delBttns = document.querySelectorAll('.delButton');

  // * 배열에 담긴 요소들에 클릭 이벤트 발생시 그 부모 노드를 삭제함.
  // * 여기서는 span class='delButton' 의 부모인 li 요소 삭제.
  for (const delBttn of delBttns) {
    delBttn.addEventListener('click', function () {
      // 여기에서 this 는 이 함수가 속해 있는 <span> 객체이다.
      // 클래스 delButton 이 <span> 에 속해 있기 때문이다.
      this.parentNode.remove();
    });
  }
});
