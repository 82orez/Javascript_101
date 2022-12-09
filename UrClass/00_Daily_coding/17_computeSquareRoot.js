// * 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// ? 인자 1 : number 타입의 정수 (num >= 2)
// ? number 타입을 리턴해야 합니다.
// ? 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)

// * 소수점 처리는 javascript 표준 내장 객체인 Number 를 검색해 봅니다. (js decimal places limit 또는 자바스크립트 소수점 자리수)
// * 제곱근을 구하는 방법 중 바빌로니아 법이 있습니다. 바빌로니아 법의 점화식(recurrence formula)을 이해할 수 있다면, 해당 식을 이용해 문제를 풀어도 좋습니다.

function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  let x = num / 2;

  while (x ** 2 !== num) {
    if (Number((x ** 2).toFixed(2)) === num) {
      break;
    }
    x = (x + (num / x)) / 2;
  }
  return Number(x.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45