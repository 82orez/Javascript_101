// * 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// ? 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// ? 배열의 요소는 음수와 0을 포함하는 정수입니다.
// ? 배열의 길이는 3 이상입니다.

const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let multi = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                multi.push(arr[i] * arr[j] * arr[k]);
            }
        }
    }

    return Math.max(...multi);
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)

// * 전개연산자를 사용해서 배열을 풀어줌.
console.log(Math.max(...[-1, 2, -5, 7]));
