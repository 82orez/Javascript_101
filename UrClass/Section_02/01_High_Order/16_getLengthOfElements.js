function getLengthOfElements(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.map((value, index, array) => {
        return value.length;
    })
}

let output = getLengthOfElements(['', 'a', 'ab', 'abc']);
console.log(output); // --> [0, 1, 2, 3]

output = getLengthOfElements(['hello', 'code', 'states']);
console.log(output); // --> [5, 4, 6]