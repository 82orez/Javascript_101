// 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

// let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(output); // --> '(010)1234-5678'

// output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
// console.log(output); // --> '(010)8765-4321'

// output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
// console.log(output); // --> '(011)4321-8765'

function createPhoneNumber(arr) {
    // 전화번호의 구성을 head, body, tail 부분으로 나누어 변수 선언 및 할당하고
    // 입력받은 문자열의 길이를 구한다. (8 or 11)
    let head = '(010)'; // 배열의 길이가 8 인 경우에만.
    let len = arr.length;
    let body = arr.slice(len - 8,len - 4).join('');
    let tail = arr.slice(len - 4).join('');

    if (arr.length === 11) {
        head = `(${arr.slice(0,3).join('')})`;
    }
    return `${head}${body}-${tail}`;
}

console.log(createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]));
console.log(createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]));