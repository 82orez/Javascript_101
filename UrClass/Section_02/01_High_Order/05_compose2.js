const f1 = function square(num) {
    return num * num;
}

const f2 = function add5(num) {
    return num + 5;
}

function compose2(func1, func2) {
    // TODO: 여기에 코드를 작성합니다.
    return function (num) {
        return func1(func2(num));
    }
}

let output = compose2(f1, f2);
console.log(output(4));