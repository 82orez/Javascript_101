function makeOddDigits(num) {
    let result = '';
    let i = 1;
    let odd = 1

    while (i <= num) {
        // result += `${odd}`;
        result += odd;  // JS 의 특성: 문자열과 숫자의 합이 실행된다.
        odd += 2;
        i ++;
    }
    return result;
}

console.log(makeOddDigits(3));
console.log(makeOddDigits(25));
console.log(typeof makeOddDigits(11));