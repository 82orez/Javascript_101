// 배열의 모든 요소의 합을 리턴.

function computeSumOfAllElements(arr) {
    let sum = 0;

    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}