// * 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

// ? 각 문자열의 길이는 다양합니다.
// ? 각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.

function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (temp.length === j) {
        temp.push(arr[i][j]);
      } else {
        temp[j] += arr[i][j];
      }
    }
  }
  console.log(temp.join(''));

  return temp.join('');
}

let input = ['hello', 'wolrd'];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'

let a = [];
let b = 'b';
let c = ['c'];

a[1] = b;
console.log(a);

a[4] = c;
console.log(a);
