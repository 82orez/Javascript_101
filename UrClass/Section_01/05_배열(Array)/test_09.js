// 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

// let output = getLongestWord('I love codestates');
// console.log(output); // --> "codestates"

// output = getLongestWord('Teamwork skills will take you anywhere');
// console.log(output); // --> "Teamwork"

function getLongestWord(str) {
    // 먼저 split 으로 분해.
    let array = str.split(' ');
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i];
        }
    }
    return result;
}

console.log(getLongestWord('I love codestates'));
console.log(getLongestWord('Teamwork skills will take you anywhere'));
console.log(getLongestWord('LVLbDCuk 7GOIYvQTyghtBtnk NfG 3mwj eQBZlol x0ycm'));