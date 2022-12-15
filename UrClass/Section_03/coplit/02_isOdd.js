// * 수를 입력받아 홀수인지 여부를 리턴해야 합니다.
// * boolean 타입을 리턴해야 합니다.

// ? 함수 isOdd 는 재귀함수의 형태로 작성합니다.
// ? 반복문(for, while) 사용은 금지됩니다.
// ? 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// ? 0은 짝수로 간주합니다.

function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num === 0) {
    return false;
  }
  if (num < 0) {
    num = -num;
  }

  return !(isOdd(num-1));
}

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false

console.log(isOdd(10));
console.log(isOdd(11));