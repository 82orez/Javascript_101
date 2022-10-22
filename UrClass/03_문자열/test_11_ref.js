function dropLetters(num, str) {
    // 종료 인덱스가 생략되면 문자열 끝까지 반환
    // 2. 종료 인덱스가 문자열 보다 클 경우
    if (num > str.length) {
        return '';
    }
    // 1. 일반적인 경우
    return str.slice(num);
}

console.log(dropLetters(2, 'hello'));
console.log(dropLetters(4, 'codestates'));