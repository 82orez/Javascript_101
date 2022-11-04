// 배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.
// 해당되는 객체의 'name' 속성값을 리턴해야 합니다.

// 1. 빈 배열을 입력받은 경우, 'no name' 을 리턴해야 합니다.
// 2. 배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.

// let output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 1);
// console.log(output); // --> 'Anna'

function getValueOfNthElement(arr, num) {
    // 1. 빈 배열
    if (arr.length === 0) {
        return 'no name';
    }
    // 2. 배열의 범위를 벗어나는 index 일 경우, 마지막 객체의 'name' 속성값을 리턴.
    else if (num > arr.length - 1) {
        return arr[arr.length - 1].name;  // [name] 도 가능
    } else {
        return arr[num].name;  // [name] 도 가능
    }
}