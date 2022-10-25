function hasRepeatedCharacter(str) {
    // 문자열 인덱스 0 부터 마지막 인덱스(문자열 길이 - 1)
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return true;
                break;
            }
        }
    }
    return false;
}

console.log(hasRepeatedCharacter('abcdefg'));
console.log(hasRepeatedCharacter('codestates'));