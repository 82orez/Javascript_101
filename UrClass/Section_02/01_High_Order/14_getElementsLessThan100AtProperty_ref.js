function lessThan100(number) {
    return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
    // TODO: 여기에 코드를 작성합니다.
    if (Array.isArray(obj[property])) {
        return obj[property].filter((value, index, array) => {
            return lessThan100(value) && typeof value === 'number';
        })
    }
    return [];
}


const obj = {
    key: [1000, 20, 50, 500, true],
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]