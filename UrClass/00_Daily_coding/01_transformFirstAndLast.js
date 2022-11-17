function transformFirstAndLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = {};

    if (arr.length === 0) {
        return {};
    } else {
        newArr[arr[0]] = arr[arr.length - 1];
        console.log(newArr);
        return newArr;
    }
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }
