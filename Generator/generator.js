// 일반적인 함수는 다음과 같이 실행하면 함수 안의 명령들이 한꺼번에 실행됨.
function fnc() {
  console.log('1');
  console.log('2');
  console.log('3');
}
fnc();
console.log();

console.log('----------Generator---------------');

// * Generator 생성자 만들기: function*
// Generator 함수는 함수 안의 명령들을 하나씩 실행하고,
// 필요하면 중간에 멈췄다가 나중에 다시 실행할 수도 있음.
//! Iterable.
function* gen() {
  yield 4;
  yield 5;
  yield 6;
}
// ? gen() 생성자로 g1 인스턴스 만들기
// g1 은 value 와 done 을 key 로 하는 객체이다.
let g1 = gen();
console.log(g1);

// g1 을 하나씩 순차적으로 실행.
// value 와 done 을 확인할 것.
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log();

// gen() 생성자로 g2 인스턴스 만들기
// 하나만 먼저 실행하고 나머지는 나중에 실행.
let g2 = gen();
console.log(g2.next());
for (const i of g2) {
  console.log(i);
}
