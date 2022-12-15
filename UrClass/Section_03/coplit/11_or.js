// * 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.

// ! 10번 문제 참조.
// * 빈 배열의 논리합은 false 입니다.

function or(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) {
    return false;
  }

  let head = arr[0];
  let tail = arr.slice(1);

  return head || or(tail);
}

let output = or([true, true, false]);
console.log(output); // --> true

output = or([false, false, false]);
console.log(output); // --> false