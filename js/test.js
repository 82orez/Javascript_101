function isPythagorean(side1, side2, side3) {
    // 거듭제곱의 3가지 방식을 정의.
    const pow1 = side1 * side1;
    const pow2 = side2 ** 2;
    const pow3 = Math.pow(side3, 2);

    // Or 연산자를 사용.
    if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
        return true;
    }

    return false;
}

console.log(isPythagorean(3,4,5));
