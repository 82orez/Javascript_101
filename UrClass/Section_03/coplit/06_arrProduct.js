// * 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.

// ? number 타입을 리턴해야 합니다.
// ? arr[0] * arr[1] * ... * arr[n-1]
// ? arr.length 는 n

// ? 함수 arrProduct 는 재귀함수의 형태로 작성합니다.
// ? 반복문(for, while) 사용은 금지됩니다.
// * 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// ? 입력으로 들어오는 arr 의 모든 요소는 정수 값을 갖는다고 가정합니다.
// * 빈 배열의 곱은 1 입니다.

function arrProduct(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return 1;
  }

  return arr.shift() * arrProduct(arr)
}

let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6