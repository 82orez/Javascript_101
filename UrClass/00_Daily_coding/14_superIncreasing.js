// * 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

// ? boolean 타입을 리턴해야 합니다.
// ? arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= arr[i+1]) {
      return false;
    }
  }
  return true;
}

let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false