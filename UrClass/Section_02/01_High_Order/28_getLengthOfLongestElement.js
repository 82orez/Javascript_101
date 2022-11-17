function getLengthOfLongestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.reduce((acc, cur) => {
        if (acc < cur.length) {
            return cur.length;
        }
        return acc;
    }, 0)
}


let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5









// function getLengthOfLongestElement(arr) {
//     // 여기에 코드를 입력하세요
//     let firstResult = arr.reduce((preV, currentV)=> {
//         if (preV.length < currentV.length) {
//             return currentV;
//         }
//         return preV;
//     }, '')
//
//     return firstResult.length;
//
// }