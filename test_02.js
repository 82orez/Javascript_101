const arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = function (...args) {
  console.log(args);
  for (const arg1 of args) {
    console.log(arg1);
  }
};

// 둘이 같다.
// 배열을 인수로 넘겨주는 apply()와 전개연산자를 이용해 배열을 인수로 치환한 call()
// sum.apply(null, arg); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum.call(null, ...arg); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sum(...arg));
