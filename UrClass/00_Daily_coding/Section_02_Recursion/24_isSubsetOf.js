// * 두 개의 배열(base, sample)을 입력받아 sample 이 base 의 부분집합인지 여부를 리턴해야 합니다.

// ? boolean 타입을 리턴해야 합니다.
// ? base, sample 내에 중복되는 요소는 없다고 가정합니다.

const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0; i < sample.length; i++) {
    if (!base.includes(sample[i])) {
      return false;
    }
  }
  return true;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
