function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    let currentMoney = 100;
    let rate = 1 + interestRate/100;
    let n = 0;

    while (currentMoney < 200) {
        currentMoney *= rate;
        n += 1;
    }
    console.log(currentMoney);
    return n;
}


let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8

output = computeWhenDouble(100);
console.log(output); // --> 1