// 0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

// 배열의 길이는 8 또는 11
// 배열 길이 11배열의 처음은 (010) 등으로 시작
// 배열 길이 8: (010) 생략

// let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(output); // --> '(010)1234-5678'

// output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
// console.log(output); // --> '(010)8765-4321'

// output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
// console.log(output); // --> '(011)4321-8765'

// ** 전화번호를 크게 3부분으로 나눔: head, body, tail

function createPhoneNumber(arr) {
    let head = '(010)';  // 배열 길이가 8일 때만.
    let body, tail;

    if (arr.length === 8) {
        body = arr.slice(0,4).join('');
        tail = arr.slice(4, 8).join('');
        return `${head}${body}-${tail}`;
    } else {
        head = `(${arr.slice(0, 3).join('')})`;
        body = arr.slice(3, 7).join('');
        tail = arr.slice(7, 11).join('');
        return `${head}${body}-${tail}`;
    }
}

console.log(createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]));
console.log(createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]));
console.log(createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]));
