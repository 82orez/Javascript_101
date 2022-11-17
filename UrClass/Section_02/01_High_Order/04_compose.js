const f1 = function square(num) {
    return num * num;
}

const f2 = function add5(num) {
    return num + 5;
}

function compose(func1, func2, num) {
    return func1(func2(num));
}

console.log(compose(f1, f2, 2));