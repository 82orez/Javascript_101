// 선형 검색 예제
// 시간 복잡도: N
// 배열 안에 해당 숫자가 있는지 검색.

// const arr = [3, 17, 75, 80, 202];

function linerSearch(arr, num) {
  let idx = 0;
  let result = `There is no ${num} !!!`;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      idx = i;
      result = `${num} is here! It's index is ${idx} !!`;
      return result;
    }
  }
  return result;
}

console.log(linerSearch([3, 17, 75, 80, 202], 202));
console.log();
console.log(linerSearch([3, 17, 75, 80, 202], 203));
