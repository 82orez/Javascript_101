// * 문제 : 자연수를 입력받고, 입력받은 수부터 1까지의 자연수를 모두 곱한 값을 리턴하는 재귀 함수 `fac` 을 작성하세요.

// ? 예1) fac(5)  ===  5 * 4 * 3 * 2 * 1  ===  5 * fac(4) === 5 * 4 * fac(3) ...
// ? 예2) fac(3)  ===  3 * 2 * 1  ===  6

function fac(n) {
  if (n === 1) {
    return 1;
  }
  return n * fac(n-1);
}

console.log(fac(5));
console.log(fac(3));