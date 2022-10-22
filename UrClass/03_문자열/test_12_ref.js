function compareOnlyAlphabet(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(compareOnlyAlphabet('hello', 'HELLO'));
console.log(compareOnlyAlphabet('world', 'WORD'));