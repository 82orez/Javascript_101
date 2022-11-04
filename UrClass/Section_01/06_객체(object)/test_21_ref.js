// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

// 띄어쓰기는 제외합니다.
// 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

// let output = mostFrequentCharacter('apples not oranges');
// console.log(output); // --> 'p'

// output = mostFrequentCharacter('hello world');
// console.log(output); // --> 'l'

// output = mostFrequentCharacter('   ');
// console.log(output); // --> ''

// output = mostFrequentCharacter('');
// console.log(output); // --> ''

// output = mostFrequentCharacter('abba');
// console.log(output); // --> 'b'

function mostFrequentCharacter(str) {
    let result = { mostCount: 0, theFirst: ''};

    for (const strElement of str) {
        if (strElement === ' ') {
        } else if (!(strElement in result)) {
            result[strElement] = 1;
        } else {
            result[strElement] += 1;
        }
        if (result[strElement] > result['mostCount']) {
            result['theFirst'] = strElement;
            result['mostCount'] = result[strElement];
        }
    }
    return result['theFirst'];
}

console.log(mostFrequentCharacter('banana'));
console.log(mostFrequentCharacter('apples not oranges'));
console.log(mostFrequentCharacter('hello world'));
console.log(mostFrequentCharacter('hello world'));
console.log(mostFrequentCharacter('abcddcba'));
console.log(mostFrequentCharacter(''));
