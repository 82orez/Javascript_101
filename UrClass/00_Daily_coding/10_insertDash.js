// * 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

// ? 0은 짝수로 간주합니다.


function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str === undefined) {
    return '';
  }

  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i-1] % 2 && str[i] % 2) {
      result += `-${str[i]}`;
    } else {
      result += `${str[i]}`
    }
  }
  return result;
}


let output = insertDash('454793');
console.log(output); // --> 4547-9-3

console.log(insertDash('0364649584527734248497490956436424513856401903589'))