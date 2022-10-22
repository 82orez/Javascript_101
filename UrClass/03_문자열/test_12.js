function compareOnlyAlphabet(str1, str2) {
    let upperStr1 = str1.toUpperCase();
    let upperStr2 = str2.toUpperCase();

    if (upperStr1 === upperStr2) {
        return true;
    }
    return false;
}

console.log(compareOnlyAlphabet('hello', 'HELLO'));
console.log(compareOnlyAlphabet('world', 'WORD'));