// 객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가리키는 인덱스에 해당하는 요소를 리턴해야 합니다.

// 배열의 요소를 리턴해야 합니다.
// 주어진 키에 해당하는 값이 배열이고, 주어진 수가 배열의 범위를 벗어나지 않는 경우에만 배열의 요소를 리턴해야 합니다.
// 그 외의 경우, undefined 를 리턴해야 합니다.

function getElementOfArrayProperty(obj, key, index) {
    // let arrProperty = obj[key];

    for (const key in obj) {
        if (Array.isArray(obj[key]) && index < obj[key].length) {
            return obj[key][index];
        }
        return undefined;
    }
}