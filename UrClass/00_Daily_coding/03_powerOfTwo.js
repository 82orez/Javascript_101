function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    //num 이 1일 때는 무조건 true
    if (num === 1) {
        return true;
    } else if (num % 2 === 1) {
        return false;  // 홀수일 때는 무조건 false
    } else {
        let i = 1;
        // 2의 제곱으로 나누었을 때 떨어지면 true
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


console.log(powerOfTwo( 2));
console.log(powerOfTwo( 4));
console.log(powerOfTwo( 5));
console.log(powerOfTwo( 6));
console.log(powerOfTwo( 8));
console.log(powerOfTwo( 11));
console.log(powerOfTwo( 16));
console.log(powerOfTwo( 22));
console.log(powerOfTwo( 32));
console.log(powerOfTwo( 36028797018963970));

console.log(8/2**3)