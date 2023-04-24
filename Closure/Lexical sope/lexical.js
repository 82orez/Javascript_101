// * 함수의 상위 스코프는 언제나 자신이 정의된 스코프이다.
// 여기에서는 foo(), bar() 둘 다 전역에서 정의되었다.
const x = 1;

function foo() {
  const x = 10;
  // foo() 내부에서 호출되었지만, bar()의 상위 스코프인 x 에 접근하여 값을 가져온다.
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

console.log('-------------------------------');

function outerFunc() {
  const x = 10;
  function innerFunc() {
    // innerFunc()의 상위 스코프는 outerFunc()이다.
    // 상의 스코프로의 변수 접근은 가능하므로 10 을 출력한다.
    console.log(x);
  }
  innerFunc();
}
outerFunc();