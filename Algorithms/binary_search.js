// 정열된 배열에서의 이진 검색
// const arr = [3, 17, 75, 80, 202];

const binarySearch = (arr, search_num) => {
  let from_idx = 0;
  let to_idx = arr.length - 1;

  while (from_idx <= to_idx) {
    let idx_at_mid = Math.floor((from_idx + to_idx) / 2);
    let value_at_mid = arr[idx_at_mid];

    if (value_at_mid === search_num) {
      return `${search_num}'s idx is: ${idx_at_mid}`;
    } else if (value_at_mid < search_num) {
      from_idx = idx_at_mid + 1;
    } else if (value_at_mid > search_num) {
      to_idx = idx_at_mid - 1;
    }
  }
  return `There is No ${search_num} !!!`;
};

console.log(binarySearch([3, 17, 75, 80, 202], 3));
console.log();
console.log(binarySearch([3, 17, 75, 80, 202], 202));
console.log();
console.log(binarySearch([3, 17, 75, 80, 202], 203));
console.log();
