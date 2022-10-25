// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']

function getElementsAfter(arr, n) {
    let result = arr.slice(n + 1);
    return result;
}

console.log(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2));