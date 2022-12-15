// * 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

// ? 문자열, 배열을 요소로 갖는 재귀적으로 정의된 배열 (입출력 예시 참고)
// ? 문자열은 선물 상자에 들어있는 각 선물의 이름을 의미합니다.
// ? 배열은 더 작은 선물 상자를 의미합니다.
// * boolean 타입을 리턴해야 합니다.
// ! 13번 참조.

// 함수 unpackGiftbox 는 재귀함수의 형태로 작성합니다.
// * 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// * 빈 배열 또는 빈 문자열을 입력받은 경우, false 를 리턴해야 합니다.

function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  if (giftBox.includes(wish)) {
    return true;
  } else {
    for (let i = 0; i < giftBox.length; i++) {
      if (Array.isArray(giftBox[i])) {
        // ! 여기에서 바로 unpackGiftbox(giftBox[i], wish) 을 리턴하면 안됨.
        // * wish 가 없는 배열이 앞에 나올 경우 그냥 false 를 리턴해 버림.
        // * 그래서 false 나오면 그냥 반복문을 계속 돌리는 형태가 필요.
        const result = unpackGiftbox(giftBox[i], wish);
        if (result) {
          return true;
        }
      }
    }
  }

  return false;
}

const giftBox = ['macbook',[],'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true

console.log(unpackGiftbox( ['pen', [[], 'iphone'], ['ps5', ['book', [], 'airpods']]], 'airpods'));