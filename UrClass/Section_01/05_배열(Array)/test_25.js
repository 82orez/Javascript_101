// 수(num)를 입력받아 num 번째까지 총 num + 1개의 피보나치 수열을 리턴해야 합니다.

// 반복문(for)문을 사용해야 합니다.
// 피보나치 수열은 0번부터 시작합니다.

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// let output = fibonacci(5);
// console.log(output[5]); // --> 5

// output = fibonacci(9)[9];
// console.log(output); // --> 34

function fibonacci(num) {
    let result = [];

    for (let i = 0; i <= num; i++) {
        if (i <= 1) {
            result[i] = i;
        } else {
            result[i] = result[i-2] + result[i-1];
        }
    }
    return result;
}
console.log(fibonacci(10));
console.log(fibonacci(10)[5]);
console.log(fibonacci(10)[9]);
