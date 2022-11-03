// 두 개의 배열을 입력받아 순서대로 합쳐진 새로운 배열을 리턴해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.

// let output = mergeArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2], [3, 4]));