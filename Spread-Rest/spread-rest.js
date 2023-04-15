// * 1. Spread (전개 연산자)

// ? 문자열을 배열로 전개하기
let str = 'Hello, everyone.';

let arr = [...str];
console.log(arr);

// ? 함수의 인자로 전개하기
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 배열을 전개해서 max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) 로 만들어 줌.
console.log('max: ', Math.max(...arr1));

const sum = (...args) => {
  // ! 여기에서 sum(...args)의 경우에는 매개 변수가 여러 개인데 정확히 모른다는 의미.
  // * 입력된 여러 개의 인자들을 하나의 배열로 만들어 준다. -> Rest(나머지 매개 변수) 문법.
  console.log(args);

  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
};
console.log('...arr1: ', sum(...arr1)); // 여기에서는 배열 요소들을 여러 개의 인자들로 전개해 주는 Spread 문법.
console.log(sum(1, 2, 3, 4, 5));

// ? 배열 합치기 --> 활용 방법 다수.
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8, 9, 10];
const arr23 = [...arr2, ...arr3.slice(1, 3)];
console.log('arr2 + arr3: ', arr23);

// ? Shallow copy (얕은 복사)
// Shallow-Deep 폴더 참조 바랍니다.

console.log('---------------------------------------');

// * 2. Rest(나머지 매개 변수) 문법
// 여러 개의 인자 또는 남아 있는 인자들을 모아서 하나의 배열로 만들어 열주는 문법.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log('first: ', first); // 1
console.log('second: ', second); // 2
console.log('rest: ', rest); // [3, 4, 5]
