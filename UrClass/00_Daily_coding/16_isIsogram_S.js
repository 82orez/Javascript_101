// * 문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

// ? 빈 문자열을 입력받은 경우, true 를 리턴해야 합니다.
// ? 대소문자는 구별하지 않습니다.
// ? boolean 타입을 리턴해야 합니다.

function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  const arr = str.toLowerCase();
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    // 빈 문자열이 들어올 때는 반복문 실행 안함.
    if (result[arr[i]]) {
      return false;
    }
    result[arr[i]] = true;
  }

  return true;
}

console.log(isIsogram(''));

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false

console.log('moOse'.toLowerCase().split('').includes('m'));

console.log('key' in { key: 1 });
