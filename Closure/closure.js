// 함수가 호출될 때마다 호출된 횟수를 누적하여 변수 numGlobal 으로 출력하는 함수 만들기.

let numGlobal = 0; // 전역 변수

const increase = () => {
  return ++numGlobal;
}

console.log('numGlobal: ', increase());
console.log('numGlobal: ', increase());

// ! 하지만 이 코드는 오류를 발생시킬 가능성이 큰 좋지 않은 코드이다.
// 전역 변수 numGlobal 에 의도치 않게 누구나 접근해서 상태 변경이 가능하다.
// --> Closure 가 필요한 이유
numGlobal = 100;
console.log('numGlobal: ', numGlobal);

console.log('-------------------------------');

const count = () => {
  let num = 0; // 지역 변수

  function increase() {
    ++num;
    console.log(num);
  }
  increase();
}
// ! 이 함수는 지역 변수를 사용하여 의도치 않은 상태 변경은 방지했지만,
// 함수를 호출할 때마다 변수가 초기화 되어 결과값은 항상 1이다.
// 이전 상태를 유지하지 못한다.
count();
count();

console.log('-------------------------------');

// 즉시실행함수(IIFE)의 활용
const countClosure = (() => {
  let num = 0;
  return function inner() {
    return ++num;
  };
})();

// 1. 즉시실행함수가 호출되면 즉시실행함수가 반환한 내부 함수가 countClosure 변수에 저장된다.
// 2. 즉시실행함수는 호출된 이후 소멸하지만,
// 3. 즉시실행함수가 반환한 클로저는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시실행함수의 렉시컬 환경을 기억하고 있다.
// 4. 따라서 즉시실행함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유 변수 num 을 언제 어디서나 호출해서 참조하거나 변경할 수 있다.

console.log('countClosure: ', countClosure());
console.log('countClosure: ', countClosure());
console.log('countClosure: ', countClosure());



