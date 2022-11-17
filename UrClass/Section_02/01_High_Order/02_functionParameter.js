const funcSquare = function square(num) {
    return num * num;
}

function functionParameter(func, num) {
    // TODO: 여기에 코드를 작성합니다.
    return  func(num);
}
console.log(functionParameter(funcSquare, 2));
