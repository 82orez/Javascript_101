function dropLetters(num, str) {
    // 종료 인덱스가 생략되면 문자열 끝까지 반환
    return str.slice(num);
}

console.log(dropLetters(2, 'hello'));
console.log(dropLetters(4, 'codestates'));