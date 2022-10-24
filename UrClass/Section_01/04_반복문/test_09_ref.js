function makeMultiplesOfDigit(num) {
    let result = '';

    for (let i = 3; i <= num; i += 3) {
        result += `${i}`;
    }
    return result;
}

console.log(makeMultiplesOfDigit(7));