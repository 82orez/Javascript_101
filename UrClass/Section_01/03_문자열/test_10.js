function takeLetters(num, str) {
    // slice(시작 index, 종료 index)
    result = str.slice(0,num);
    return result;
}

console.log(takeLetters(5, 'codestates'));
