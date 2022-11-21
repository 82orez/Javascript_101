// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

// 단어는 공백 한 칸으로 구분합니다.
// 연속된 공백은 없다고 가정합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str.length !== 0) {
        let splitArr = str.split(' ');
        let result = '';
        for (const el of splitArr) {
            result += el[0];
        }
        return result;
    } else {
        return '';
    }
}

let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter('The community at Code States might be the biggest asset');
console.log(output); // --> "TcaCSmbtba"

console.log(firstCharacter(''));
