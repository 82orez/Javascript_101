// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num === 1) {
        return true;
    } else if (num % 2 === 1) {
        return false;
    } else {
        let i = 2;
        while (i <= num) {
            if (num / (2 ** i) === 0) {
                return true;
            } else {
                i++;
            }
        }
        return false;
    }
}

let output1 = powerOfTwo();
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false

console.log(powerOfTwo( 36028797018963970));
