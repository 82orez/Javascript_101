// 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

const f1 = function square(num) {
    return num * num;
}

const f2 = function add5(num) {
    return num + 5;
}

function pipe(...functions) {
    // TODO: 여기에 코드를 작성합니다.
    return function (num) {
        let result;
        for (const funcEl of functions) {
            result = funcEl(num);
            num = result;
        }
        return result;
    }
}

let output = pipe(f1, f2);
console.log(output(4));