// * map(콜백 함수(value, index, array))
// 배열의 각 요소에 순차적으로 같은 콜백 함수를 실행한 후 그 결과를 새로운 배열로 반환.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map((num) => {
  return num * 2;
});
console.log('map: ', newArr);
console.log();

// * filter(콜백 함수(value, index, array))
// 특정 조건으로 filtering.

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr1 = arr1.filter((value, index, array) => {
  return value <= 7 && value > 2;
});
console.log('filter: ', newArr1);
console.log();

// * reduce(콜백 함수(accumulator, value, index, array), 초기값)
// 배열의 각 요소에 순차적으로 같은 콜백 함수를 실행하면서 그 결과를 하나의 결과값(숫자, 문자열, 배열 등)으로 누적시켜 나타내 줍니다.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduceResult = arr2.reduce((total, currentValue, currentIndex, array) => {
  total += currentValue;
  return total;
}, 100);
console.log('reduce: ', reduceResult);
console.log();

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
// 펼친 결과: [0, 1, 2, 3, 4, 5]
console.log('flattened: ', flattened);
