// * String --> Array

// ? split(구분자, 갯수)
let str= 'Hello, everyone.';

// 공란을 기준으로 split.
const arr = str.split(' ');
console.log(arr);

// 모든 단일 문자 기준으로 split.(공란 포함)
const arr1 = str.split('');
console.log(arr1);

// ? Spread(전개 연산자) 문법
const arr2 = [...str];
console.log(arr2);
console.log();

console.log('------------------')

// * Array --> String

// ? Array.join(구분자)
const str1 = arr2.join('');
console.log(str1);
