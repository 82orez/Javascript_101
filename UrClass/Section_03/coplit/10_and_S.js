// * 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.

// ? boolean 타입을 리턴해야 합니다.
// ? arr[0] && arr[1] && ... && arr[n-1]
// ? arr.length 는 n

// 함수 and 는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// * 빈 배열의 논리곱은 true 입니다.

function and(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // * 종결자는 빈 배열이 들어 왔을 때.
  if (arr.length === 0) {
    return true;
  }

  // * 기본 구조는 배열의 첫번째 인덱스를 뽑아 내고 다음 배열의 첫번째 인덱스와 논리곱을 하는 형태.
  let head = arr[0];
  let tail = arr.slice(1);

  return head && and(tail);
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false