function getSumOfFactors(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(getSumOfFactors(8));
console.log(getSumOfFactors(12));
