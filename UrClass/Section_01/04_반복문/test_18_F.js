function listPrimes(num) {
    let result = "2";

    if (num === 2) {
        return result;
    }

    for (let i = 3; i <= num; i = i + 2) {
        // 소수 해당 여부를 판별하는 변수 선언.
        let isPrime = true;

        // 자연수 소수 판별 공식: 해당 자연수의 제곱근 이하의 소수들로 나누었을 때 떨어지지 않으면.
        let sqrt = Math.sqrt(i);

        for (let j = 3; j <= sqrt; j = j + 2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += `-${i}`;
        }
    }
    return result;
}

// console.log(listPrimes(2));
// console.log(listPrimes(3));
// console.log(listPrimes(4));
// console.log(listPrimes(5));
console.log(listPrimes(12));
