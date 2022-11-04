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
    let result = {};

    for (const strElement of str) {
        if (str.length === 0) {
            return {};
        } else if (strElement === ' ') {
        } else if (!(strElement in result)) {
            result[strElement] = 1;
        } else {
            result[strElement] += 1;
        }
    }
    console.log(result);
    let maxValue = 0;
    let maxKey = '';

    for (const key in result) {
        if (result[key] > maxValue) {
            maxKey = key;
            maxValue = result[key];
        }
    }
    return maxKey;
}

console.log(mostFrequentCharacter('apples not oranges'));
console.log(mostFrequentCharacter('hello world'));
console.log(mostFrequentCharacter('      '));
console.log(mostFrequentCharacter(''));

// const array = [1, 2, 3, 4, 5];
// console.log(Math.max(...array));
