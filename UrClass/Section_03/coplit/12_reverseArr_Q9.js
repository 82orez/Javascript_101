// * 배열을 입력받아 순서가 뒤집힌 배열을 리턴해야 합니다.
// ! 9번 문제 참조.

// ? 순서가 뒤집힌 배열을 리턴해야 합니다.
// ? [arr[n-1], arr[n-2], ... , arr[0]]
// ? arr.length 는 n

// 함수 reverseArr 는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// ? 빈 배열은 빈 배열 그대로를 리턴해야 합니다.

function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // * 종결자는? 배열의 길이가 0 (빈 배열)
  if (arr.length === 0) {
    return [];
  }

  // * 배열의 마지막 요소와 앞 부분을 분리해서,
  let last = arr[arr.length - 1];
  let first = arr.slice(0, arr.length - 1);

  // * 연속적으로 합쳐 주는 형태.
  return [last].concat(reverseArr(first));
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

console.log(reverseArr([-1, -2, 1, 2, 3, 4]));
