function makeDigits(num) {
    let numStr = '';

    for (let i = 1; i <= num; i++) {
        numStr += i.toString();
    }
    return numStr;
}

console.log(makeDigits(5));
console.log(makeDigits(7));
