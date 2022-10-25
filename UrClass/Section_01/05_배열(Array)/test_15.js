// 배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
// console.log(output); // --> ['a', 'b', 'c']

// let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 6);
// console.log(output); // --> []

function getElementsUpTo(arr, n) {
    if (n > arr.length) {
        return [];
    }
    let result = arr.slice(0, n);
    return result;
}

console.log(getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3));
console.log(getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 6));