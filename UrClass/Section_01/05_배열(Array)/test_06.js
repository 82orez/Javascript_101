// 공백 있는 문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴
// let output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
    let result = [];

    if (str.length === 0) {
        return result;
    }

    return result = str.split(' ');
}