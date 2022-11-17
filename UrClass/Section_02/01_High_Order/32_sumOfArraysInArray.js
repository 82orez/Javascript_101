function sumOfArraysInArray(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let numbers = arr.map((value) => {
        return value.filter((onlyNum) => {
            return typeof onlyNum === 'number';
        });
    });
    console.log(numbers);

    let mapping = numbers.reduce((preV, currentV) => {
        return preV.concat(currentV);
    });
    console.log(mapping);

    return mapping.reduce((preV, currentV) => {
        return preV + currentV;
    }, 0);
}

let output = sumOfArraysInArray([
    [1, 2],
    [undefined, 4, '5'],
    [9, 'hello'],
    [['1', undefined], [undefined]]
]);
console.log(output); // --> 16
