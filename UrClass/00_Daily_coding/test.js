// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// n >= 1
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num === 1) {
        return true;
    } else if (num % 2 === 1) {
        return false;
    } else {
        let i = 1;
        while (i <= num) {
            if (num / (2 ** i) === 1) {
                return true;
            } else {
                i++;
            }
        }
        return false;
    }
}


console.log(powerOfTwo( 2));
console.log(powerOfTwo( 4));
console.log(powerOfTwo( 5));
console.log(powerOfTwo( 6));
console.log(powerOfTwo( 8));
console.log(powerOfTwo( 16));
console.log(powerOfTwo( 22));
console.log(powerOfTwo( 36028797018963970));

console.log(8/2**3)