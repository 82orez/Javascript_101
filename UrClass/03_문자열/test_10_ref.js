function takeLetters(num, str) {
    //2. 예외적인 경우, 문자열 길이가 종료 인덱스 보다 작거나, 문자열 자체가 빈 문자열일 경우, 문자열 자체를 출력.
    if (num > str.length || str === '') {
        return str;
    }
    // 1. 일반적인 경우 아래처럼 코딩.
    return str.slice(0, num);
}

console.log(takeLetters(5, 'codestates'));
console.log(takeLetters(10, ''));