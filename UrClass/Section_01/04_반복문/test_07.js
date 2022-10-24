function makeDigits2(num) {
    let result = '';
    let i = 1;

    while (i <= num) {
        // 1을 더할 때는 '-' 기호 없이 그냥 1을 더함.
        if (i === 1) {
            result += `1`;
            i += 1;
        } else {
            // 나머지 숫자를 더할 때는 '-숫자'를 더함.
            result += `-${i}`;
            i += 1;
        }
    }
    return result;
}

console.log(makeDigits2(1));
console.log(makeDigits2(5));
