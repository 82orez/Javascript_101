// * 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.

// ? 'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴해야 합니다.
// ? 배열의 요소는 차례대로 행, 열입니다. ([행, 열])
// ? 행: 'B'를 요소로 갖는 배열 arr[i]의 인덱스 i
// ? 열: arr[i]에서 'B'(arr[i][j])의 인덱스 j
// ? 항상 한 개의 문자열 'B'가 존재합니다.

function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'B') {
        result.push(i, j);
      }
    }
  }
  return result;
}

let output = findBugInApples([['A'], ['B']]);
console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]
