// * 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// ? 버블 정렬(bubble sort)은 여러 정렬 알고리즘(삽입 정렬, 퀵 정렬, 병합 정렬, 기수 정렬 등) 중 가장 기본적인 알고리즘입니다.
// ? 버블 정렬 알고리즘은 아래와 같습니다.
// ? 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// ? 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// ? 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
// 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
// 1~3의 과정을 첫 요소부터 다시 반복합니다.
// 5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
// 1~3의 과정을 총 n번(배열의 크기) 반복합니다.
//     이 모습이 마치 '거품이 밀려 올라가는 것과 같은 모습'과 같아서 bubble sort 라고 부릅니다.

const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
};

let output = bubbleSort([2, 1, 5, 6, 3, 7, 4]);
console.log(output);

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([20, -10, -11, 2, 4, 299]));

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
