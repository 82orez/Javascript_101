let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log(`Index ${i}'s value is ${words[i]}!`);
}

for (const word of words) {
    console.log(word);
}

words.forEach((value, index, array) => {
    console.log(value, index);
});

// push: 맨 뒤에 추가
words.push('push');
console.log(words);

// pop: 맨 뒤 삭제
words.pop();
console.log(words);

// unshift: 맨 앞에 추가
// shift: 맨 앞에 삭제
// 주의! 속도가 상대적으로 매우 느림
words.unshift('unshift');
console.log(words);

words.shift();
console.log(words);

// splice:해당 index 부터 몇 개까지 삭제하고 새로운 데이터 추가
words.splice(1,2,'splice');
console.log(words);

// concat: 배열 합치기
let words2 = ['hello', 'world'];
let newWords = words.concat(words2);
console.log(newWords);

// indexOf: find a first index
// lastIndexOf: find a last index
console.log(words);
console.log(words.indexOf('present'));

// includes: 포함 여부 -> true or false
console.log(words.includes('present'));

console.log(words.toString());
console.log(words.toLocaleString());
console.log(words.join('+'));


