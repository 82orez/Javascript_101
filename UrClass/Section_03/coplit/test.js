// * 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

// 배열을 리턴해야 합니다.
// 함수 flattenArr 는 재귀함수의 형태로 작성합니다.
// ? Array Method flat()과 flatMap() 사용은 금지됩니다.
// * 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
// * 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // ! 9번 참조.
  //   * 종결자: 빈 배열
  // if (arr.length === 0) {
  //   return [];
  // }
  //
  // // * 첫 인덱스와 나머지 부분 분리.
  // const head = arr[0];
  // const tail = arr.slice(1);
  //
  // if (Array.isArray(head)) {
  //
  //   // * head 부분이 배열이면 전개연산사를 이용해서 배열을 풀어 주고 재귀 함수를 호출.
  //   return flattenArr([...head, ...tail]);
  //
  //   // * head 부분이 배열이면 아니면 tail 부분을 이용해서 재귀 함수를 호출.
  // } else {
  //   return [head].concat(flattenArr(tail));
  // }

  // ! 반복문 이용.

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flat = flattenArr(arr[i]);
      result.push(...flat);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]

let a = [3, 4, 5];
console.log([1, 2, ...a]);
