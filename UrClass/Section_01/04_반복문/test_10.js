function makeMultiplesOfDigit2(num1, num2) {
    let count = 0;

    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            // 시작 값이 0이면 그냥 패스.
            if (i === 0) {
                continue;
            }
            if (i % 2 === 0) {
                count++;
            }
        }
        return count;
    } else {
        for (let i = num2; i <= num1; i++) {
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
}

console.log(makeMultiplesOfDigit2(8, 12));
console.log(makeMultiplesOfDigit2(12, 8));
console.log(makeMultiplesOfDigit2(0, 2));
console.log(makeMultiplesOfDigit2(2, 2));
