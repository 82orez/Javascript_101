// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.

// 반복문(for, while) 사용은 금지됩니다. => slice(start, end + 1)
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// 배열의 길이 이상의 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.

// let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
// console.log(output); // --> ['d', 'e']

function getElementsAfter(arr, n) {
    if (n >= arr.length) {
        return [];
    }
    return arr.slice(n + 1);
}

console.log(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2));