// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴해야 합니다.

// 배열의 요소를 리턴해야 합니다.
// 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 배열의 요소를 리턴해야 합니다.
// 그 외의 경우, undefined 를 리턴해야 합니다.

function getLastElementOfProperty(obj, property) {
    if (Array.isArray(obj[property])) {
        return obj[property][obj[property].length - 1];
    }
    return undefined;
}