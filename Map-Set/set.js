// * Set
// Set 은 Array(배열)과 비슷하지만 값이 중복 되지 않음.
// new Set() or new Set(배열)
// add(값): chaining 가능.

const numSet = new Set();

numSet.add('one').add('two');
console.log(numSet);
console.log();

// Spread(전개 연산자)를 이용해 배열로 만들 수도 있음.
const numSet1 = [...numSet];
console.log(numSet1);
