// * 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

// ? 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// ? 3개 이상 연속되는 문자만 압축합니다.

function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    let sum = 1;

    // * 마지막 문자가 중복에 해당될 경우에 대비.
    str = str + ' ';

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            sum += 1;
        } else {
            if (sum >= 3) {
                result += `${sum}${str[i - 1]}`;
            } else {
                result += str[i - 1].repeat(sum);
            }
            sum = 1;
        }
    }
    return result;
}

let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p
