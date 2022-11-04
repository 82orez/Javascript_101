// 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.

// 각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.
// 빈 문자열을 입력받은 경우, 빈 객체를 리턴해야 합니다.

// let output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

// 1. 반환할 빈 객체 생성
// 2. 문자열 -> 배열로 변환

function countAllCharacters(str) {
    let result = {};
    for (const strElement of str) {
        if (!(strElement in result)) {
            result[strElement] = 1;
        } else {
            result[strElement] += 1;
        }
    }
    return result;
}

console.log(countAllCharacters('banana'));