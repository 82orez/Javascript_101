function makeMultiplesOfDigit(num) {
    let result = '';

    for (let i = 3; i <= num; i++) {
        if (i % 3 === 0) {
            result += `${i}`;
        }
    }
    return result;
}

console.log(makeMultiplesOfDigit(7));