// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴.
// let output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllLetters(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
    }
    return result;
}

console.log(getAllLetters('Radagast'));
console.log(getAllLetters(''));