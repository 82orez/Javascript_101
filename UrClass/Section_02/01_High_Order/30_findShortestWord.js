function findShortestWord(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let string = arr.filter(value => {
        return typeof value === 'string';
    })
    console.log(string);

    if (string.length === 0) {
        return '';
    }

    return string.reduce((acc, cur) => {
        if (acc.length <= cur.length) {
            return acc;
        } else {
            return cur;
        }
    },)
}


let output = findShortestWord([4, 'two', 2, 'three']);
console.log(output); // --> 'two'