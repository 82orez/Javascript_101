// 배열을 입력받아 마지막 인덱스의 요소(element)를 리턴.
// 빈 배열 -> undefined.

function getLastElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}