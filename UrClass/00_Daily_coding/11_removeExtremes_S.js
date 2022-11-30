// * 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// ? 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// ? 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  let min = arr[0];
  let minIdx = 0;

  let max = arr[0];
  let maxIdx = 0;

  for (let i = 1; i <arr.length; i++) {
    if (arr[i].length <= min.length) {
      min = arr[i];
      minIdx = i;
    }
    if (arr[i].length >= max.length) {
      max = arr[i];
      maxIdx = i;
    }
  }
  console.log(min);
  console.log(minIdx);
  console.log(max);
  console.log(maxIdx);

  for (let i = 0; i < arr.length; i++) {
    if (i !== maxIdx && i !== minIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}

// ! 배열값이 아닌 index 를 저장하고 비교하여 출력하는게 point.

let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]

console.log(removeExtremes([ '', '', 'eept', 'ssps', 'sss' ]))