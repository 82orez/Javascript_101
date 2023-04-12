// ? 아래 예는 순수 함수가 아님.
// 외부 변수 num 의 값이 변함에 따라 함수의 결과값이 달라짐.

let num =1;

function add(a) {
    return a + num;
}
console.log(add(1));


// * 아래 함수는 순수 함수임.
// 외부 변수에 의해 함수의 결과값이 달라지지 않고 항상 같은 결과값을 가짐.

function add1(a, b) {
    return a + b;
}
console.log(add1(1, 2));