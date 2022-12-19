// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
// n >= 1

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // if num 이 1일 때는 무조건 true
    // else if num 이 홀수일 때는 무조건 false
    // else num 이 2의 제곱으로 나누었을 때 떨어지면(=== 1) true
    if (num === 1) {
        return true;
    } else if (num % 2 === 1) {
        return false; // 홀수일 때는 무조건 false
    } else {
        let i = 1;
        while (2 ** i <= num) {
            if (num / 2 ** i === 1) {
                return true;
            } else {
                i++;
            }
        }
        return false;
    }
}

console.log(powerOfTwo(2));
console.log(powerOfTwo(3));
console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
console.log(powerOfTwo(6));
console.log(powerOfTwo(8));
console.log(powerOfTwo(11));
console.log(powerOfTwo(16));
console.log(powerOfTwo(22));
console.log(powerOfTwo(32));
console.log(powerOfTwo(36028797018963970));

console.log(8 / 2 ** 3);
