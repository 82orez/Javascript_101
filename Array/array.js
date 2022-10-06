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