function isPythagorean(side1, side2, side3) {
    let maxSide = Math.max(side1, side2, side3);  // 가장 큰 변 찾기.
    let maxPow, middlePow, minPow;

    // ** Javascript 거듭제곱 방법 3가지
    // a * a ; 자기자신을 곱하기
    // a ** N; 거듭제곱 연산자 사용
    // Math.pow(a,2) ; Math 내장 객체 사용

    // 가장 큰 변을 찾았으면 나머지 두 변과 비교한다.
    if (maxSide === side1 ) {
        if (side1 * side1 === (side2 * side2) + (side3 * side3)) {
            return true;
        }
        return false;
    } else if (maxSide === side2) {
        if (side2 ** 2 === (side1 ** 2) + (side3 ** 2)) {
            return true;
        }
        return false;
    } else {
        if (Math.pow(side3,2) === Math.pow(side1,2) + Math.pow(side2,2)) {
            return true;
        }
        return false;
    }
}

console.log(isPythagorean(5,4,3));
