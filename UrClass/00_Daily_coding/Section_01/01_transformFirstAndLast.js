// 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

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
