// * 함수 두 번 호출 방지를 위해 즉시실행함수 사용.
const counter = (() => {
  // 상태 관리를 위한 자유 변.
  let counter = 0;
  // 콜백 함수를 인자로 받는 클로저를 반환
  // ! 인수로 전달 받은 보조 함수에 상태 변경을 위임.
  return function (predicate) {
    counter = predicate(counter);
    return counter;
  };
})();

// increase 보조 함수
function increase(n) {
  return ++n;
}

// decrease 보조 함수
function decrease(n) {
  if (!n <= 0) {
    return --n;
  } else {
    return n;
  }
}

console.log('Closure\'s type: ' , counter);

// 아래의 counter(); 명령어의 의미는 counter 함수 실행하라는 의미가 아님.
// 즉시실행함수 실행 후 counter 변수에 할당된 익명 함수를 실행하라는 의미임.
// 그런데 그 익명 함수의 인자로 increase, decrease 보조 함수를 적용함.
console.log(counter(increase));
console.log(counter(increase));

console.log(counter(decrease));
console.log(counter(decrease));
