// * 브라우저 뒤로 가기-앞으로 가기
// * 문제
// 개발자가 되고 싶은 김코딩은 자료구조를 공부하고 있습니다.
// 인터넷 브라우저를 통해 스택에 대해 검색을 하면서 다양한 페이지에 접속하게 되었는데 "뒤로 가기", "앞으로 가기"를 반복하면서 여러 페이지를 참고하고 있었습니다.
// 그런데 새로운 페이지를 접속하게 되면 "앞으로 가기" 버튼이 비활성화돼서 다시 보고 싶던 페이지로 갈 수 없었습니다. 이러기를 반복하다가 김코딩은 스택 자료구조를 떠올리게 되었습니다.
// 브라우저에서 "뒤로 가기", "앞으로 가기" 기능이 어떻게 구현되는지 궁금해진 김코딩은 몇 가지 조건을 아래와 같이 작성하였지만, 막상 코드를 작성하지 못하고 있습니다.
//
// * 조건
// * 새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.
// * 뒤로 가기 버튼을 누를 경우 원래 있던 페이지를 next 스택에 넣고 prev 스택의 top 에 있는 페이지로 이동한 뒤 prev 스택의 값을 pop 합니다.
// * 앞으로 가기 버튼을 누를 경우 원래 있던 페이지를 prev 스택에 넣고 next 스택의 top 에 있는 페이지로 이동한 뒤 next 스택의 값을 pop 합니다.
// * 브라우저에서 뒤로 가기, 앞으로 가기 버튼이 비활성화일 경우(클릭이 되지 않을 경우)에는 스택에 push 하지 않습니다.

// * 주의사항
// 만약 start 의 인자로 string 자료형이 아닌 다른 자료형이 들어온다면 false 를 리턴합니다.
// 새로운 페이지 접속은 알파벳 대문자로 표기합니다.
// 뒤로 가기 버튼을 누른 행동은 -1로 표기합니다.
// 앞으로 가기 버튼을 누른 행동은 1로 표기합니다.
// 다음 방문할 페이지는 항상 현재 페이지와 다른 페이지로 접속합니다.
// 방문한 페이지의 개수는 100개 이하입니다.
// 반환되는 출력값 배열의 첫 번째 요소 prev 스택, 세 번째 요소 next 스택은 배열입니다. 스택을 사용자 정의한다면 출력에서는 배열로 변환해야 합니다.

function browserStack(actions, start) {
  // * start 인자가 string 이 아닌 것들은 전부 false 로 리턴합니다.
  if(typeof start !== 'string') return false;

  // * 뒤로 가기와 앞으로 가기 스택의 변수를 설정합니다
  let prevStack = [];
  let nextStack = [];
  let current = start;

  // * actions 배열을 전부 탐색하기 위해 반복문을 설정합니다.
  for(let i = 0; i < actions.length; i++) {
    // * 만약 actions 배열의 요소가 -1이고(뒤로가기를 눌렀고), prevStack 의 길이가 0이 아닐 때(이전으로 돌아가는 페이지가 있다면)
    if(actions[i] === -1 && prevStack.length !== 0) {

      // * prevStack 에서 pop 한 요소를 prevPage 로 할당합니다.
      // * nextStack 에 current 를 삽입합니다.
      // * current 를 prevPage 에 할당합니다.
      let prevPage = prevStack.pop();
      nextStack.push(current);
      current = prevPage;

      // * 만약 actions 배열의 요소가 1이고(앞으로가기를 눌렀고), nextStack 의 길이가 0이 아닐 때(다음으로 넘어가는 페이지가 있다면)
    } else if(actions[i] === 1 && nextStack.length !== 0) {

      // * nextStack 에서 pop 한 요소를 nextPage 로 할당합니다.
      // * prevStack 에 current 를 삽입합니다.
      // * current 를 nextPage 에 할당합니다.
      let nextPage = nextStack.pop();
      prevStack.push(current);
      current = nextPage;

      // * 만약 actions 배열의 요소가 알파벳이라면 (새로운 페이지라면)
    } else if(typeof actions[i] === 'string') {

      // * prevStack 에 current 를 삽입합니다.
      // * current 에 현재 알파벳 요소를 할당합니다.
      // * 새로운 페이지는 앞으로 갈 수 없기 때문에 nextStack 을 비웁니다.
      prevStack.push(current);
      current = actions[i];
      nextStack = [];
    }

    // * 이외엔, 동작하지 않습니다.
  }

  // * 배열에 prevStack, current, nextStack 을 순서대로 담아 반환합니다.
  return [prevStack, current, nextStack];
}