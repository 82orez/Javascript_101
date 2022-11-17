function getDoubledElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((value, index, array) => {
        return value * 2;
    })
}

let output = getDoubledElements([1, 2, 3, 4]);
console.log(output); // --> [2, 4, 6, 8]