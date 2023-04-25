// 함수가 호출될 때마다 호출된 횟수를 누적하여 변수 numGlobal 으로 출력하는 함수 만들기.

let numGlobal = 0; // 전역 변수

const increase = () => {
  return ++numGlobal;
}

console.log('numGlobal: ', increase());
console.log('numGlobal: ', increase());

// ! 하지만 이 코드는 오류를 발생시킬 가능성이 큰 좋지 않은 코드이다.
// 아래처럼 전역 변수 numGlobal 에 의도치 않게 누구나 접근해서 상태 변경이 가능하다.
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

console.log('---------------Closure----------------');

// 즉시실행함수(IIFE)의 활용
const countClosure = (() => {
  let num = 0;
  return function inner() {
    return ++num;
  };
})();

// 1. 즉시실행함수가 호출되면 즉시실행함수가 반환한 inner 함수가 countClosure 변수에 저장된다.
// 2. 즉시실행함수는 호출된 이후 소멸하지만,
// 3. 즉시실행함수가 반환한 클로저(inner 함수)는 자신이 정의된 위치에 의해 결정된 상위 스코프인 countClosure 함수의 렉시컬 환경을 기억하고 있다.
// --> 함수의 실행이 종료되어 해당 함수의 실행 컨텍스트가 소멸되었다 하더라도
// --> 그 함수의 렉시컬 환경이 바로 소멸되지는 않음. 렉시컬 환경은 독립된 객체임.
// --> 만약 그 함수의 렉시컬 환경을 누군가 참조하고 있다면 해당 함수의 렉시컬 환경은 소멸하지 않습니다. (실행 컨텍스트 참조)
// 4. 따라서 countClosure 변수에 저장된 클로저(inner 함수)는 카운트 횟수의 상태 관리를 위해 자유 변수 num 접근해서 참조하거나 변경할 수 있다.

// ! 아래의 countClosure()의 의미는 countClosure 함수를 실행하라는 의미가 아니다.
// 변수 countClosure 에는 즉시실행함수가 실행한 익명 함수로부터 반환 받은 inner 함수가 저장되어 있다.
// ! 따라서 아래의 countClosure()의 의미는 결국 inner 함수를 실행하라는 의미이다.
// countClosure 함수가 다시 실행되는 것이 아니므로 변수 num 의 초가화 과정이 없다.
console.log('변수 countClosure 에 저장되어 있는 값: ', countClosure); // 결과값은 inner 함수.
console.log('countClosure: ', countClosure());
console.log('countClosure: ', countClosure());

를