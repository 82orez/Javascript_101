function listPrimes(num) {
    let result = "2";

    if (num === 2) {
        return result;
    } else {
        for (let i = 3; i <= num; i = i + 2) {
            let isPrime = true;
            let sqrt = Math.sqrt(i);
            for (let j = 3; j <= sqrt; j = j + 2) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                result = `${result}-${i}`;
            }
        }
    }
    return result;
}

// console.log(listPrimes(2));
// console.log(listPrimes(3));
// console.log(listPrimes(4));
// console.log(listPrimes(5));
console.log(listPrimes(5));
