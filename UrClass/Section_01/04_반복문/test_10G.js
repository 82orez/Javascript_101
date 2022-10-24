function makeMultiplesOfDigit2(num1, num2) {
    let count = 0;

    // 일단 num1 이 더 작은 수라고 가정.
    let start = num1;
    let end = num2;

    // num2 가 더 클 경우에는 시작점과 끝 점을 서로 바꿔줌.
    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    for (let i = start; i <= end; i++) {
        // 시작 값이 0이면 그냥 패스.
        if (i === 0) {
            continue;
        }
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(makeMultiplesOfDigit2(8, 12));
console.log(makeMultiplesOfDigit2(12, 8));
console.log(makeMultiplesOfDigit2(0, 2));
console.log(makeMultiplesOfDigit2(2, 2));
