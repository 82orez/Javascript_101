// * 수(num)와 배열을 입력받아 차례대로 num 개의 요소가 제거된 새로운 배열을 리턴해야 합니다.
// * 순차적으로 num 개의 요소가 제거된 배열을 리턴해야 합니다.

// ? 함수 drop 은 재귀함수의 형태로 작성합니다.
// ? 반복문(for, while) 사용은 금지됩니다.
// ? 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// ? num 과 arr.length 중 최소값만큼 제거합니다.

function drop(num, arr) {
  // * 아랫 부분 재귀 호출 과정에서 num 의 숫자를 하나씩 줄이므로
  // * 종결자를 num === 0 으로 설정하고 이 때의 arr 을 리턴.
  if (num === 0) {
    return arr;
  }

  // ? num 이 배열 길이 보다 클 경우에는 실행 안하고 빈 배열 리턴.
  if (num > arr.length) {
    return [];
  }

  // * 재귀 호출 될 때마다 배열의 첫번째 요소를 제거함.
  arr.shift();
  return drop(num - 1, arr);
}

let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]

console.log(drop(3, [1, -2, 1, 3]));
