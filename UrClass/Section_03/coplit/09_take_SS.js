// *수 (num)와 배열을 입력받아 차례대로 num 개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

// ? 순차적으로 num 개의 요소로 구성된 배열을 리턴해야 합니다.
// ? 함수 take 는 재귀함수의 형태로 작성합니다.
// ? 반복문(for, while) 사용은 금지됩니다.
// ? 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).

function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  // * 종결자는 누구인가? n === 0
  if (num === 0 || arr.length === 0) {
    return [];
  }

  // * 첫 인덱스와 나머지 부분 분리.
  // ? head 는 number, tail 은 array.
  const head = arr[0];
  const tail = arr.slice(1);

  // console.log(typeof head);
  // console.log(Array.isArray(tail));

  // * 남아 있는 arr 의 첫번째 요소를 하나씩 떼어 오다가 마지막에 0 이 되면 빈 배열을 합쳐 주게 됨.
  return [head].concat(take(num -1, tail));
}

let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]

console.log(take(0, [-1, -2, 1, 2, 3, 4, 5]));
console.log(take(5, [-1, -2, 1, 2, 3, 4, 5]));
