// * 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// ? 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// ? 배열의 요소는 음수와 0을 포함하는 정수입니다.
// ? 배열의 길이는 3 이상입니다.

const largestProductOfThree = function (arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const len = arr.length;

    // * 이건 이해됨. 오름차순으로 정렬시켰으니 가장 큰 수 3개를 곱하는거니까.
    const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];

    // * 그런데 아래 라인의 논리 구조가 이해 안됨.
    // * 음수를 포함한 구조 같은데...
    const candi2 = sorted[len - 1] * sorted[0] * sorted[1];

    return Math.max(candi1, candi2);
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)

// * 전개연산자를 사용해서 배열을 풀어줌.
console.log(Math.max(...[-1, 2, -5, 7]));
