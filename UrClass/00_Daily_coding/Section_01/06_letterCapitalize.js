// * 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// ? 단어는 공백으로 구분합니다.
// ? 연속된 공백이 존재할 수 있습니다.
// ? 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';

    if (str.length === 0) {
        return result;
    }
    if (str[0] !== ' ') {
        result += str[0].toUpperCase();
    } else {
        result += str[0];
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}


let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"

let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "

let a = 'javascript  is sexy '
console.log(a.split(' '));
console.log(a.split(' ')[1].length);