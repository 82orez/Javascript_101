// 공백 있는 문자열을 입력받아 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴
// 반복문(for, while) 사용은 금지됩니다.=> split() 함수 사용 권고.

// let output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
    let result = [];

    if (str.length === 0) {
        return result;
    }
    return result = str.split(' ');
}
console.log(getAllWords('Radagast the Brown'));